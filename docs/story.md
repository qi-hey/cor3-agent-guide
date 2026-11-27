# 剧情任务

建议先从桌面底部的 Notifications 打开 Quests，阅读当前任务的 Hints。下面的节点和地址均属于 COR3 游戏地图。

## Onboarding

已完成教程。用 Quests 面板的完成状态核对，成就可作为补充。选择 Deployment 后，游戏内 Information Note 说明早期 Act 在这个模式下不可用。`Restore` 会重置进度，掉线时优先使用 `Retry`。

## Byte and TX-71

1. 在 Raid Archive 核对 Byte 的取回任务已完成。
2. 按剧情提示付尾款，背包应收到 `TX-71`。一次实测的尾款为 4,800 CR，付款前核对自己的报价。
3. 回 Messenger 完成 Aurana 的后续对话。先核对剧情是否还需要额外远征，再花 CR 雇人。

## 301 Broken server

1. 打开 Messenger 的 **CEDRT Work Chat** 群聊，接受检查 `855.529.2.2` 的安排。Christopher 的私聊里有独立的 June 活动线索。
2. 在 Network Map 连接 `RM7-E2L2`，打开 SAI 的 `Task Access`。进入 Files 或 Logs 后给文件列表留出加载时间。
3. 下载并解开 `connection_logs_recovered.eb52x`。用解码结果确认目标为 `855.529.4.22`。
4. 沿游戏地图依次连接 `RM7-N2ECP`、`RM7-N2L2`、`RM7-N2L3`。每跳先核对地图连通状态，地图连通即可继续下一跳。
5. 在 `RM7-N2L3` 连通后，把 `855.529.4.22` 完整填入地图搜索框并按 Enter。打开发现的 `EM[undefined]` 的 SAI，等 Messenger 出现 Unknown User，完成首次对话。

6. 按 `Nutcracker delivery` 完成交易、确认剧情访问并收集两份文件。回 `CEDRT Work Chat` 发送附带 `attack_logs.log` 的报告，直到游戏提示联系 Aurana。
7. 在 Messenger 向 Aurana 汇报，发送她的最后一条可选回复。实测游戏随后将桌面文件更新为 `attack_logs.jjqv`，Quests 中 `Broken server` 和 `A deal with the unknown` 都显示完成。

若点工作群后右侧仍停在 Unknown User，可先切到 Aurana，再点工作群。实测切换成功后，报告选项在群聊底部显示。

## A deal with the unknown

Unknown User 在首次对话提出交换条件。游戏内防火墙需要带至少一年订阅。下文记录了 `Nutcracker` 的购买和交付。

任务提示还列出另一个游戏内选项，即通过配装取得该节点的 SAI 访问。`RE-nova v3.0` 曾在市场显示兼容 EMERMODE，CRL 2.0 时的一次报价为 15,755 CR。购买前核对兼容性和实际可装配强度，安装后再检查能否满足界面的 15 点防御要求。配装路线仍待验证。

`RE-nova v3.0` 的商品详情显示内存容量基础消耗 2.2 TB、最低 4.3 TB、最高 5.5 TB。一次检查中，现装的 `Emerald H2S9` 只有 4 TB，市场中的 6 TB `Emerald H3S12` 报价 11,385 CR。也要核对 CPU、GPU、电源和其他资源。

商品详情的 GPU 算力最低值为 0.85 PFLOPS，显存最低值为 0.4 TB。实测 `UNO 6.651`、`OmniPix 23.2` 和 6 TB `Emerald H3S12` 可以安装 RE-nova，装机后入侵强度为 12，搜索强度为 7。目标节点仍显示 15 点防御并禁用登录。仅更换这款内存和软件不足以走通 301 的这条路线。比较新 GPU 前也要核对电源，实测整机已用满 2 kW。

在 `Loadout > 更换` 核对备件时，`M-Mate J12-40` 的最高频率为 7.2 GHz，低于 RE-nova 的 11.2 GHz 基础需求。`UNO 6.651` 的 0.8 kW 与市场 `Force Recon 13D` 的 1.6 kW 合计需要 2.4 kW。准备这套配装时应连同电源一起核算，装机后的强度仍待实测。

## Nutcracker market listing

实测从 `Home Market > File` 以 28,750 CR 买到 `Nutcracker`，要求 CRL 1.0，当时库存 1 件。购买确认窗标明一年期安全订阅。确认后核对余额和商品状态。每次购买前重新检查当前报价与库存。

## Nutcracker delivery

在 `Messenger > Unknown User` 选择附带 `Nutcracker` 的回复。等对方确认授予访问，再点对话末尾的确认回复。实测发送这条回复后，游戏才弹出获得 `EM[UNDEFINED]` 访问的提示。回游戏地图连接该节点，打开 SAI 并选择「任务访问」。实测可进入文件列表。

末尾确认回复发送前，任务面板实测显示 50%，目标 SAI 显示暂无有效访问。当 `RM7-E1L3` 处于维护时，连接 `RM7-N2ECP` 和直接连接剧情节点均报无可用路径。可用游戏地图的维护倒计时确定何时重查连接。

在该节点的 `Files` 下载 `attack_logs.log` 和 `ad_note.png`，在游戏桌面核对两份文件。实测两份材料齐全后，游戏会提示回 `CEDRT Work Chat` 提交。按 301 步骤继续完成两次汇报。[社区 Act 3 攻略](https://mrsouer.com/guides/cor3/cor3-act-3)

## 302 Ghost Protocol

301 完成后，从 `Notifications > Hints` 查看 `B43273N` 的 `chat_fragments.txt` 和 `5CRYPt0L 0J` 线索。展开 `Codex > Entry 3: The Way > 3.3: Ghost Protocol`，打开 `Personal Log` 核对 `.JJQV` 文件需要专用解密套件。

实测先连接 `B43274N`，再在游戏地图搜索 `854.266.7.3`，可发现 `B43273N`。节点显示在线、类型 `D4RK/B1N`、防御 12。复查时 `D4RK RM7EG` 和 `B43274N` 都可连通，连接 `B43273N` 仍报无可用路径。`B43274N` 的 SAI 显示暂无有效访问。[社区地图存档](https://github.com/3ncy/cor3/blob/main/Network%20map/README.md)

2026 年 7 月 15 日的更新公告提到 `Ghost Protocol` 有专用路线。实测将 `Private Matters` 推进到 40%，在 `B43274N` 和 `B43271N` 取得访问并打开合并后的图像之后，从 `B43274N` 再连 `B43273N` 成功。可用同一顺序复查先前报无路由的节点。此时目标 SAI 显示 12 点防御，暂无有效访问，登录后的文件领取仍待验证。[CORE Corp. 更新公告](https://x.com/cor3corp/status/2077380652043731442)

## Ghost Protocol suite

社区归档的 `chat_fragments.txt` 指向游戏节点 `Koute_Secure_Hub`。将节点名直接填入游戏 Browser，实测显示页面未找到。在 Network Map 搜索 `Koute Secure Hub` 时返回 `0/0`。[剧情材料存档](https://github.com/3ncy/cor3/blob/main/chat_fragments.txt)

社区归档的 Personal Log 记录了下载并打开 `chat_fragments.txt` 后出现的线索，可据此检查 Codex 是否更新，以及 Palimpsest 是否提供后续对话。[个人日志存档](https://github.com/3ncy/cor3/blob/main/Codex/Entry%203%20The%20Way/Personal%20Log.md)

社区软件目录将支持 `.JJQV` 的 `5CRYPt0L 0J` 列在 `BMI-ZEN`，记录报价 108,550 CR、市场等级 3。进入方式、任务获取选项和实时购买条件仍待验证。[社区软件目录](https://github.com/3ncy/cor3/blob/main/Market/README.md#decrypt)

## Private Matters

1. 在 `RM7-N2ECP` 的游戏内 ICE WALL 完成图案挑战后，打开 SAI，阅读与 Ozren Navratil 有关的 Valeriani 文件。按文件里的游戏内联系人加入 Messenger，完成开场对话会推进到 20%。
2. 按 [Paid ICE WALL](market.md#paid-ice-wall) 在 `RM7-S4WCP` 取得有效访问。从 `Files` 下载标有 `QUEST_RELATED` 的 `message_4237122_secured.eb54x`，在游戏桌面打开。
3. 显示加密强度 24 且当前解密工具不兼容时，实测可从文件窗的 `Force hack` 开启 500 CR 的[终端参数谜题](puzzles.md#terminal-configuration)。通过后桌面生成 `.dat`，并提示可联系 Ozren。
4. 回 Messenger 完成关于 Garrett Sloan 的回复，继续直到接受他的委托。实测收到 10,000 CR，任务推进到 33%。法典中的后续线索指向游戏内的 4D4RK。
5. 在 `B43274N` 和 `B43271N` 的 SAI 复查挑战。实测这次分别报价 1,000 CR 和 1,200 CR。通过 ICE WALL 后，选中新增访问并登录，在两个节点的 `Files` 分别取得 `d4_CTF_lott0792_p2.vrnm` 和 `d4_CTF_lott0792_p1.vrnm`。
6. 在游戏桌面打开任一分片，确认提示已收集所有文件，再点「合并」。打开生成的 `d4_CTF_lott0792.png`。实测图像提供 `4D4RKJUMP3RS.corie`，任务推进到 40%。继续按 [Private Matters chat](#private-matters-chat) 进入剧情站。

打开图像后可在 `法典 > 火星的沉默 > 1：私事` 阅读 ChuckTheFerry 的个人日志。日志提示还需确定该站点的托管节点。实测连接已取得访问的 `B43271N` 后，在游戏 Browser 输入完整站名仍显示「网关超时」。在 Network Map 搜索该站名返回 `0/0`。

游戏 Browser 的地址栏可能保留初始的 `CORIE` 并把输入接在后面。提交前检查地址栏，遇到多余的前缀可按 `Home` 定位并用 `Delete` 删掉。连接 `B43274N` 和 `B43273N` 后，实测提交完整的 `https://4D4RKJUMP3RS.corie` 仍显示「网关超时」。

Messenger 内的 CORIE 数据库支持 `PERSON 名 姓` 查询。实测 `PERSON Garrett Sloan` 返回无匹配，`RM7-S4WCP` 的剧情文件可推进调查。

## Private Matters chat

1. 在游戏地图连接 `D4RK RM7EG`，再在 COR3 自带 Browser 打开 `https://4D4RKJUMP3RS.corie`。实测该节点能打开 `Sign Up` 页面。地址栏保留 `CORIE` 前缀时，先删掉多余前缀再提交。
2. 在游戏剧情表单设置昵称，填当前角色的 `FREEL ID`。提交后从游戏内 Messenger 读取六位验证码，回剧情页面填写并点 `Submit`。
3. 在站内搜索框搜索 `ChuckTheFerry`。实测首次进入时右侧虽有他的名字，仍显示 `No chat`。点搜索按钮使对话出现在 `Last chats`，再选中该条目。
4. 按剧情回复接受收集五份 CEDRT 节点记录的委托。实测对话出现 `Attach file`，`Notifications > Quests` 显示 `Private Matters` 67%。继续按 [Private Matters evidence](#private-matters-evidence) 收集和交付。

`Notifications > Hints` 指定在 `CEDRT public` 或 `CEDRT private` 节点使用带搜索强度的软件，点 `Search for valuables`。下载并打开找到的文件，识别 `Crime evidence`、`Offence planning`、`Illegal activity` 或 `COR3 protocol violation` 标签。

## Private Matters evidence

1. 在 `Home Market > Software` 查看 `Seeker-IV v0.6`。实测报价 10,580 CR、要求 CRL 1.0，兼容 `CEDRT public` 和 `CEDRT private`。按商品详情核对装机条件。用 `UNO 6.651`、`OmniPix 23.2` 和 6 TB `Emerald H3S12` 装机后，`RM7-E1L3` 的 SAI 实测显示 12 点搜索强度。
2. 用现有游戏访问登录，进 `Files` 点 `Search for valuables`。实测 `RM7-E1L3` 和 `RM7-E1L5` 均有结果。逐笔点下载并在游戏 Downloads 核对文件。实测换装 `RE-nova v3.0` 后，`RM7-E1L3` 的搜索工具栏仍显示 0。
3. 在游戏 Downloads 打开文件，检查 `SOURCE` 和 `INFO TAG`。实测从 `RM7-E1L3`、`RM7-E1L5` 和 `RM7-S4L1` 凑齐五份材料。生成的文件名按本轮服务器显示。结果窗点下载后，若 Downloads 缺文件，可回同一节点的 `Files` 用该行下载按钮重新取文件。
4. 连回 `D4RK RM7EG`，打开站内 ChuckTheFerry 的对话。每次用 `Attach file > Downloads` 选一份合格材料，点 `Attach` 并等对方回复。实测五份均被接收，对方发来 `Svyaz_PTLS2_LUCh.jpg`。点击 `Open` 查看图片，确认法典更新及任务面板的 73%。

## Private Matters satellite

1. 在 `Codex > Martian Silence > Private Matters` 查看个人日志。回 `Messenger > Ozren Navratil` 提出火星通信方案，走完关于 Urizen 的对话。实测任务进度为 80%。
2. 回 4D4RK 站内找 ChuckTheFerry，询问待售卫星的识别标记，选择 `Deal`。实测个人日志更新为 `Waiting on ChuckTheFerry`，任务进度为 87%。后续回复需在站内对话复查。

## June

1. 从桌面的 `Chris_Tong_Intel` 打开 `Forum_Screenshot.png`，核对游戏的法典更新通知。
2. 在 COR3 自带的 Browser 打开 `CiTo16 Drone Files` 书签，对照截图的仓储线索。实测 `KRVA_BB.eb52x` 的下载按钮可用，其余三项灰显。先在游戏桌面核对是否已经有 `KRVA_BB.png`。
3. 在游戏桌面双击 `KRVA_BB.png`。实测弹出法典更新通知，`法典 > 第3条：路 > 3.1：回到原点` 可看到「KRVA_BB 项目文件」。图片的「信息」面板可核对来源 `RM7-E1L2CT`。回 Quests 查看，June 仍为 70%，后续触发条件待验证。

`RM7-E1L2CT` 的 SAI 实测为 7 点防御。选择已有的「通过工具授予」访问后，在 `Files` 可以找回 Christopher Tong 的邮件、板卡资料和 Mantis 图片。复查这些线索后，June 仍显示 70%。

从 70% 继续推进时，见 [June media reader](#june-media-reader)。

## June media reader

1. 连接 `RM7-S4L2`，在 SAI 选择已生效的 `By Hack` 访问并登录。到 `Files` 下载 `USSDP-V1250_Rep.AD64`。
2. 在游戏桌面双击文件。文件从桌面消失时，到 `MR-7 Media Reader 78x` 核对 `USSDP-V1250_Rep` 是否已加入可选磁盘。
3. 用 `Next disk` 选中新盘，点 `Insert USSDP-V1250_Rep`，再双击文件列表中的 `USSDP-V1250_Rep.AD64`。实测打开片段时间线，`C1` 显示 `MQ-01 — June`，任务面板显示 80%。

[社区提示存档](https://github.com/3ncy/cor3/blob/main/hints.md#june-quest)

## July

1. 任务面板显示 June 完成后，实测 July 已开放。到 `Codex > Entry 3: The Way > 2251 Crisis / July` 阅读个人日志。
2. 在 Messenger 找 Christopher Tong，完成关于调查和地面联络人的对话，再向 Aurana Strogova 汇报录音。实测 July 到 38%，提示再次联系 Chris。
3. 回 Chris 的对话选择 `Any luck?`，走完关于 Natalia Gromova 的回复。实测 July 到 50%。`Notifications > Hints` 提示到 CEDRT 节点取人员备份，并提示可用游戏内 `Force hack`。社区档案把加密文件 `c0e2b4d6f8a0c2b4d6e8f1a3c5b7d.ab52p` 与 Natalia 的档案关联。所在节点和交付仍待实测。[社区文件索引](https://github.com/3ncy/cor3/blob/main/CEDRT%20Doissers/c0e2b4d6f8a0c2b4d6e8f1a3c5b7d.ab52p.md)

## Black Ledger

1. 连上 `RM7-S4L4`，用有效的游戏内 SAI 访问打开 Files。下载并打开 `cufgu ab ginhu Koute.png`。
2. 到 `法典 > 第3条：路 > 黑账` 展开文件夹，打开「个人日志——帕林普塞斯特密码」。回 Messenger 选择新出现的 `Unknown`，走完对话。实测这一段将黑账从 10% 推进到 40%。
3. 对话要求从尤索尔市场雇用符合条件的承包人，前往库奥特站取回装有记录仪的货箱。

激活南区中转后，已实测从 `RM7-E1SCP` 经 `RM7-S4L3`、`URM7-S5L2` 连到 `URM7-M`。这次 `URM7-M` 显示 25 点防御，SAI 显示暂无有效访问。尤索尔市场的实际进入方式、雇用和交付仍待验证。

同一游戏地图还可连接 `URM7-H`，并发现 `URM7-W4L2`、`UPRM7-S3L2` 和 `URRM7`。`URM7-H` 的「登录」打开 SAI，实测显示 24 点防御且暂无有效访问。

## D4RK route

南区中转生效后，实测依次连接 `RM7-E1SCP`、`RM7-S4L3`、`URM7-S5L2`、`URM7-H`、`URM7-W4L2`、`D4RK RM7CE` 和 `D4RK RM7EG`，地图出现 `B43274N`。该节点可连通，服务器类型为 `D4RK/B1N`，SAI 显示 8 点防御，暂无有效访问。涉及的市场入口仍待验证。

`D4RK RM7MI` 也已连通。地图提供「登录」，这次 Deployment 界面未显示市场按钮。SAI 显示 `D4RK T4` 节点有 15 点防御，当前无有效访问。

在 `B43274N` 已连接时，在游戏地图搜索 `854.266.7.1` 并按 Enter，实测发现 `B43271N`。连接 `RM7-E1L2CT` 后可连到 `B43271N`，其 SAI 显示 27 点防御和暂无有效访问。`D4RK 2IV2` 实测也能连通，节点显示 22 点防御，地图未显示市场入口。

连接 `D4RK RM7EG` 和 `B43274N` 后，实测也可连到 `B43272N`。其 SAI 显示 36 点防御和暂无有效访问。

接取 `IP Cleanup` 前，核对市场和地图使用的节点名称。一次在地图搜索委托所写的 `D4RK T43272` 返回 `0/0`。可连通的 `B43272N` 仍需分别核对访问。另一笔委托的 `D4RK RM7CE` 可连通，SAI 显示类型 `D4RK T4`、防御 15 且暂无有效访问。

`D4RK RM7EG` 曾出现 Decrypt & Extract 委托。接单前打开游戏 SAI，实测防御为 15，且未显示有效访问。先核对能否取得游戏访问，再决定是否接单。

## D-Badger loadout check

`Home Market > Software` 的 `D-Badger v2.2` 实测报价为 28,290 CR，要求 CRL 4.0，兼容 `D4RK/B1N`。点商品名可查看完整属性。详情标明需要专门的操作许可，工具在 302 的实际可用性待验证。

D-Badger 的 GPU 算力最低值为 0.72 PFLOPS，显存最低值为 0.83 TB。`OmniPix 23.2` 的总容量实测为 0.88 PFLOPS 和 1 TB 显存。`Loadout > 帮助` 说明并装时要计入其他程序的基础占用。按界面规格估算，若同装 `Cypher+ v1.4`，两款程序的 CPU 频率需求为 5 + 7.9 GHz，超过 `UNO 6.651` 的 12.7 GHz。购买前还要核对单独装机后能否达到 `B43273N` 所需的 12 点强度。

按最紧缺资源在最低值与最高值之间的比例估算，与这套配装上三款模块的实测值相符。D-Badger 的显存范围为 0.83 至 1.85 TB，现有 1 TB 估算约 11 点。`Loadout > GPU > Change` 可核对备件。本轮可用列表只有现装 GPU，D-Badger 的实际强度和操作许可仍待验证。

一次实测 `Force Recon 13D`（1.5 TB 显存）报价 30,935 CR，`Quartz 28-BR`（2.8 kW）报价 19,895 CR，与 `D-Badger v2.2` 合计 79,120 CR。可在同一市场核对这三项的实时价格和库存。

## SOYUZ route

连接 `RM7-N2ECP` 和 `RM7-N2L2` 后，在游戏地图搜索 `855.529.4.17` 并按 Enter。连接找到的 `SRM7-N3L2`，再连接 `SRM7-N3L1`，地图会显示 `SRM7-M` 和 `SRM7-N4L2`。实测两者均能连通，SAI 分别显示 24 和 18 点防御。复查 `SRM7-M` 时，地图显示可登录且暂无有效访问，未显示市场按钮。

## 305 Herald's Trail

CORIE 3.104.9 更新公告将完成 `304 Line to the Ground` 列为解锁条件。完成 304 后重连 COR3，在 Quests 找 `305 Herald's Trail`。公告列出 304 和 305 的 CR 和名望奖励。[CORE Corp. 更新公告](https://x.com/cor3corp/status/2117553114806931812)

本攻略尚未实测 305 解锁和完成。推进后核对 Quests 和实际到账。Fragmentary Order 的账号折扣在官网结算页核对。
