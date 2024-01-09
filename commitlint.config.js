// build: 影响构建系统或外部依赖项的更改（示例范围：gulp、broccoli、npm）
// ci: 更改我们的 CI 配置文件和脚本（示例范围：Travis、Circle、BrowserStack、SauceLabs）
// docs: 文档修改
// feat: 一个新的功能
// fix: 一个 bug 修复
// perf: 提升性能的代码修改
// refactor: 既不修复错误也不添加功能的代码更改
// style: 不影响代码含义的更改（空格、格式、缺少分号等）
// test: 添加缺失的测试或更正现有测试

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新增功能
        'update', // 更新功能
        'ui', // 样式改动
        'fix', // 修复功能bug
        'merge', // 合并分支
        'refactor', // 重构功能
        'perf', // 性能优化
        'revert', // 回退提交
        'style', // 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等)
        'build', // 修改项目构建工具(例如 glup，webpack，rollup 的配置等)的提交
        'ci', // 更改我们的 CI 配置文件和脚本（示例范围：Travis、Circle、BrowserStack、SauceLabs）
        'docs', // 文档新增、改动
        'test', // 增加测试、修改测试
        'chore', // 不修改src或者test的其余修改，例如构建过程或辅助工具的变动
      ],
    ],
  },
}
