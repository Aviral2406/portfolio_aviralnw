const fs = require('fs');
const readline = require('readline');
const path = require('path');

const transcriptPath = 'C:\\Users\\avira\\.gemini\\antigravity-ide\\brain\\6877ce96-9b6f-4f13-8931-9130ee99a8e9\\.system_generated\\logs\\transcript_full.jsonl';
const targetDir = 'C:\\Users\\avira\\OneDrive\\Desktop\\portfolio conts\\recovered';

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir);
}

const fileHistory = {};

async function processLineByLine() {
  const fileStream = fs.createReadStream(transcriptPath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    try {
      const step = JSON.parse(line);
      if (step.tool_calls && step.tool_calls.length > 0) {
        for (const tc of step.tool_calls) {
          const name = tc.name || tc.tool_name || tc.toolName;
          if (name && (name === 'write_to_file' || name === 'default_api:write_to_file' || name === 'multi_replace_file_content' || name === 'default_api:multi_replace_file_content' || name === 'replace_file_content' || name === 'default_api:replace_file_content')) {
            const args = tc.args || tc.tool_arguments;
            if (args && args.TargetFile && args.TargetFile.includes('portfolio conts')) {
              const basename = path.basename(args.TargetFile);
              if (!fileHistory[basename]) {
                fileHistory[basename] = [];
              }
              // Don't save replacements, only absolute full writes for now, or just save them to see.
              if (args.CodeContent) {
                fileHistory[basename].push(args.CodeContent);
              }
            }
          }
        }
      }
    } catch (e) {
      // ignore JSON errors
    }
  }

  for (const [basename, versions] of Object.entries(fileHistory)) {
    console.log(`File: ${basename}, versions: ${versions.length}`);
    for (let i = 0; i < versions.length; i++) {
       const v = versions[i];
       const outPath = path.join(targetDir, `${basename}.v${i}`);
       fs.writeFileSync(outPath, v);
    }
  }
}

processLineByLine();
