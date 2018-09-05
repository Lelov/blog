---
prev: ./base.md
next: false
---
# 在以太坊上创建私链
首先安装命令行[geth](https://ethereum.org/cli)以及[eth客户端](https://github.com/ethereum/mist/releases/tag/v0.11.0) (目前v0.11.0[完整版本可在首页找到](https://ethereum.org/#))
后续都会使用命令行进行操作`geth`,可以使用`geth --help`查看常用命令
# 创建
1. 创建区块指定数据
`geth -datadir 'path'`
ps: path为区块的存在的目录
2. 创建帐户
`geth account new`
输入命令后会让你输入两次密码，输入时界面不会有反应，但请记住密码及输入密码后生成的账号哈希值
查看帐户列表`geth account list`