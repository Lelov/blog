---
prev: false
next: ./createBlockChain.md
---

# 区块链
区块链就是通过密码学的方式形成的一个由集体维护的分布式数据库。
# 区块链的诞生是为了解决什么问题？
受信任的第三方担保(解决了信任)
# 核心
1.去中心化，没有第三方中介，一切都由程序来完成。
2.安全性，主要体现在分布式、51%攻击，即使一个节点被攻击或宕机也不会影响网络的运行。
3.最核心的就是：去信任。一切社会行为都要建立在”信任“的基础上，这也是区块链解决的最根本的问题。
每个用户之间都可以是直接联系的，不再有任何第三方的参与
失败了也没关系，至少我把一个概念告诉了别人，总有人成功的
# 数据结构
区块链以区块为单位组织数据，全网所有的交易记录都以交易单的形式存储在全网唯一的区块链中。
- 版本号，标示软件及协议的相关版本信息
- 区块高度：可以理解为每个区块的唯一ID，从零开始的“创世块”（即块高度为0），一段时间生成一个块，块高度加1。
- 头哈希：每一个区块都有一个唯一哈希值，依据上一个区块的头哈希+数据块哈希+随机数生成
- 父哈希：上一个高度区块的哈希值
- merkle根：区块中每一笔交易对应一个哈希，呈树状结构，生成的最终值（根），代表了该区块中的交易。
- 难度：难度不是固定不变的，会随着网络现有算力的变化而自动调节
- Nonce(随机数)：挖矿所要达到的目标值(记录解密该区块相关数学题的答案的值),用于工作量的证明
- 时间戳：记录该区块产生的时间，精确到秒
- 区块体：一定时间内所生成的交易信息，即账本
加密：sha256

# 核心问题
1. 工作量证明
区块头包含一个随机数，节点通过反复尝试来找到这个随机数，直到找到该值即构建了一个工作量证明机制。
2. 分叉
同一时间段内全网不止一个节点能计算出随机数，即会有多个节点在网络中广播它们各自打包好的临时区块（都是合法的）。
某一节点若收到多个针对同一前续区块的后续临时区块，则该节点会在本地区块链上建立分支，多个临时区块对应多个分支。该僵局的打破要等到下一个工作量证明被发现，而其中的一条链条被证实为是较长的一条，那么在另一条分支链条上工作的节点将转换阵营，开始在较长的链条上工作。其他分支将会被网络彻底抛弃。
3. 双花
双花，即二重支付，指攻击者几乎同时将同一笔钱用作不同交易。


# 解决用户需求方案
- 传统中心化
1. 身份问题
电子签名签名，即`公钥 - 私钥(密钥，通过sha256加密)`对,通过私钥确认用户信息
ps: 该解决方案有一个小漏洞：可以复制同一行信息来伪造交易记录，解决的办法是添加一个这笔交易独有的信息（比如时间戳）
2. 欠债跑路问题   
余额记录，并找三方担保人(银行，国家)
- 去中心化

#　工作原理
- SHA256
一种求Hash值的加密算法
- Merkle Tree
具有树结构的二叉树或多叉树
Merkle树的叶子节点上的value由设计者指定
非叶子节点的value是根据它下面所有的叶子节点值，然后按照一定的算法计算而得出的
- 时间戳服务器
一款基于PKI（公钥密码基础设施）技术的时间戳权威系统
# 一个比特币完整节点具备的功能
1. 钱包，允许用户在区块链网络上进行交易
2. 完整区块链，记录了所有交易历史，通过特殊的结构保证历史交易的安全性，并且用来验证新交易的合法性
3. 矿工，通过记录交易及解密数学题来生成新区块，如果成功可以赚取奖励
4. 路由功能，把其它节点传送过来的交易数据等信息再传送给更多的节点
完整的交易过程
A与B发生交易，A