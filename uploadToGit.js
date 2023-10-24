import util from 'util'
import child_process from 'child_process'

// 调用util.promisify方法，返回一个promise,如const { stdout, stderr } = await exec('rm -rf build')
const exec = util.promisify(child_process.exec);

const run = async function () {
 // 运行git
    await exec(`git add dist -f`);
    console.log("add update")
    await exec(`git commit -m "adding dist"`);
    console.log("commit update")
    await exec(`git subtree push --prefix dist origin gh-pages`);
    console.log("push update")
}
run();