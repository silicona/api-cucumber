const common = [
    'features/**/*.feature',
    '--require-module ts-node/register',
    '--require step-definitions/**/*.ts',
    '--format progress-bar',
    '--format @cucumber/pretty-formatter',
    '--publish-quiet'
].join(' ');

const perfil = [
    'features/**/*.feature',
    '--require-module ts-node/register',
    '--require step-definitions/**/*.ts',
    '--format progress',
    //'--format @cucumber/pretty-formatter',
    '--format html:./coverage/report.html',
    '--format message:./coverage/summary.txt',
    '--publish-quiet'
].join(' ');


module.exports = {
    default: common,
    perfil: perfil
    // More profiles can be added if desired
};
