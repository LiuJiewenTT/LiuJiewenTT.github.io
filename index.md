# Home

This is the personal home page of LiuJiewenTT.

这里是刘杰文的个人主页。

## 前言 {#preface}

朋友们，很高兴在这里相遇！我是刘杰文，来自中国，目前还是一名学生。我加入 Github 已经至少有6年了，近期开发水平正在快速提高，也开始尝试将更多的想法付诸实践。在这里，在这个自由社区，我希望能与大家共建一个更加友好、美好的的未来。如果你有什么有趣的想法，欢迎来和我分享。

<link rel="stylesheet" href="css/used_tech.css">

## 技术栈 {#technoloy_stack}

详见：[技术栈详细](site_pages/技术栈详细.md).

|    Tech.     |                            About                             |
| :----------: | :----------------------------------------------------------: |
|    C/C++     | 非常熟悉，有两个商业项目的开发经历。事实上，这是我最早开始接触的语言，也是中学时代参与竞赛(NOIP)并获奖时使用的语言。本人能熟练使用面向对象的开发和面向过程的开发。 |
|    Python    | 非常熟悉，我的大部分个人项目都是使用Python进行开发，因为它可以大大节省开发时间，提高程序员的效率，非常适合做最小可信性验证等目标。个人最偏爱这门语言，熟练度不低于C/C++，也更倾向于使用Python的工作。 |
|    Batch     | 此处指Windows批处理命令。很熟悉，能良好运用，本人已有多个项目使用纯Batch开发，并已在此站公开。在我看来，它具有高开放度、高兼容性和极其便利的特点，非常适合简单的目标。 |
|    Linux     | 熟悉，有过一段较长的使用经历，能在Linux上进行开发、编译、调试等工作。个人接触最多的Linux发行版是商业服务器常见的CentOS7。 |
| 安卓应用开发 | 熟悉。成功开发过几个个人应用，例如：中秋博饼APP（库：ee308fz_lab2）。 |

---

其他技能：

|    Skill    |                            About                             |
| :---------: | :----------------------------------------------------------: |
|     SSH     | 熟悉SSH的使用，有大量实践经验，会使用SFTP，有使用libssh2进行C语言开发的经历，其中包括开发使用SFTP的功能。 |
|   虚拟机    | 熟悉虚拟机的使用和管理，长期使用虚拟机。熟悉Hyper-V和VMware的使用和管理。 |
|  Markdown   |         熟练使用此标记语言，常使用它编写博客和网页。         |
|     Git     |                           熟练使用                           |
| 使用GDB调试 |             有使用GDB调试C/C++语言的程序的经验。             |
|  Adobe XD   |                           能够运用                           |



## 个人成果 {#Work_result}

以下项目不限状态，可能是已完成或是正处于开发的任意阶段。

### 游戏相关

**Snowbreak_ServerSwitcher**
: Repository: *[Snowbreak_ServerSwitcher](https://github.com/LiuJiewenTT/Snowbreak_ServerSwitcher)*。用于切换不同渠道的启动器，以连接到不同的《尘白禁区》服务器(纯bat脚本实现)，支持在国服与国际服之间切换。<span class="used_tech">使用到的技术: *batch*。</span>

**CBJQ_SS_FrontEnd-tk**
: Repository: *[CBJQ_SS_FrontEnd-tk](https://github.com/LiuJiewenTT/CBJQ_SS_FrontEnd-tk)*。《尘白禁区》服务器切换器的前端程序（使用tkinter作为GUI库），支持个性化的特性多。<span class="used_tech">使用到的技术: *Python*, *tkinter*。</span>

MCMDC
: Repository: *[MCModDependencyCheck](https://github.com/LiuJiewenTT/MCModDependencyCheck)*。使用此工具可以完成对《我的世界》Java版（Forge端）的模组依赖检查而无需启动游戏，全流程快速、高效、简便，已适配大部分情况。<span class="used_tech">使用到的技术: *Python*。</span>

BirdMC
: Repository: *[BirdMC](https://github.com/LiuJiewenTT/BirdMC_original)*。专门用于裁剪图片的工具，主要应用于《我的世界》地图画制作。只要指定图片，就可以使用鼠标选择要批量裁剪出的块图，随后使用其他转换工具进行地图画的后续制作。<span class="used_tech">使用到的技术: *Python*, *opecv-python*。</span>

**VPet Mod Sync**
: Repository: *[vpet_modsync](https://github.com/LiuJiewenTT/vpet_modsync)*。这是一个为 *VPet Simulator (Published on Steam)* （虚拟桌宠模拟器）定制的模组同步用途的模组。它使用Junction以免除手动复制或移动的操作来使软件在离线时也一定能加载到模组。从创意工坊订阅的资源不会被移动，因此“同步”指在本地范围内进行同步，不影响创意工坊更新资源，也不会有额外操作的需求。自2023年9月8日发布以来，模组得到了很好的反响，**订阅率超96% (1134/1179)**(数据截止至2023年9月14日)。<span class="used_tech">使用到的技术: *batch*。</span>

L4D2_OfflineAssistant
: Repository: *[L4D2_OfflineAssistant](https://github.com/LiuJiewenTT/L4D2_OfflineAssistant)*。有时从Steam创意工坊下载的模组在启动时会被清除，这是由于网络问题导致未能获取到资源订阅列表。此外有一个副作用：如果你有大量的模组，那么你的硬盘将不得不遭受大量写数据的苦难，这会浪费时间、寿命和性能。为了避免此事，一个常见的作法是将下载到的模组移到上一层储存，但是这样除了是层级看着更加杂乱以及不好管理，还使得其在游戏内无法正确链接资源的描述等信息，而这有时会导致乱码和图片缺失，不利于游戏内管理（即启用或禁用）资源。为了取两者之长，我开发了这个工具，在启动游戏前确保它正在运行，或使用它进行游戏启动，可以保证上述问题不再出现，真是完美的解决方案！<span class="used_tech">使用到的技术: *batch*。</span>

MCVINE
: Repository: *[MCVINE](https://github.com/LiuJiewenTT/MCVINE/)*。曾经的专用工具，供小伙伴更好地游玩网易版《我的世界》（PC、Java Edition）。它最初名为 *[mcmod](https://github.com/LiuJiewenTT/mcmod)*，只能添加自选模组。在进一步发展的过程中，为了避免混淆，改名为此，并逐渐加入了添加任意资源的能力。随着本人离开了网易版《我的世界》，也不再关注后续更新，此项目亦终止发展。<span class="used_tech">使用到的技术: *batch*。</span>

### Windows应用和工具

IconFold
: Repository: *[IconFold](https://github.com/LiuJiewenTT/IconFold)*。使用这套工具，可以方便地提取文件夹使用的自定义图标，也可以以不同的方式给文件夹应用或取消应用自定义图标。图标可以是你希望的任何有效的 *.ico* 文件。<span class="used_tech">使用到的技术: *batch*。</span>

TraceOpenedFiles
: Repository: *[TraceOpenedFiles](https://github.com/LiuJiewenTT/TraceOpenedFiles)*。使用此工具可以方便地监视一个程序使用的文件的情况。此工具拥有额外的特性，支持多种监视对象获取方式，支持从程序一启动就开始监视而无需手动传入信息。<span class="used_tech">使用到的技术: *Python*。</span>

ThreadKiller
: Repository: *[ThreadKiller](https://github.com/TTStudio-of-TTPeter/ThreadKiller)*。这是一套脚本组成的工具，专门用于监视并结束指定进程以达成拒绝运行的目的。（部分情况可能需要适当提权运行。）自编完整的安装、重置和卸载逻辑，完整且简便的设置/管理体验。<span class="used_tech">使用到的技术: *batch*。</span>

### General Application

IPCode
: Repository: *[IPCode](https://github.com/LiuJiewenTT/IPCode)*。这是一个“大”的项目，一个将由多个子项目组成的集合。这个项目旨在推进IPv6的表达方式，力图打通全场景、形成最便捷的地址信息传递。目前这个项目处于早期开发阶段。<span class="used_tech">使用到的技术: *Python*。</span>

leap-day
: Repository: *[leap-day](https://github.com/LiuJiewenTT/leap-day)*。一个基于GitHub给出的leap-day的定制版主题，修复和添加了一些特性。其中包括对移动设备的更好的支持、对mermaid的完美支持……<span class="used_tech">使用到的技术: *CSS3*, *SCSS*, *HTML*, *Liquid*。</span>

MergePDF
: Repository: *[MergePDF](https://github.com/LiuJiewenTT/MergePDF)*。这是一个对已有库的封装的脚本，专注于PDF合并，提供一些操作选项和优化操作的可能。（Windows可执行文件格式的发行版集成Python运行环境。）<span class="used_tech">使用到的技术: *Python*。</span>

### 安卓APP

中秋博饼APP
: Repository: *[ee308fz_lab2](https://github.com/LiuJiewenTT/ee308fz_lab2)*。一个离线的多人博饼游戏，另加入了一点特殊设定（即彩蛋）。<span class="used_tech">使用到的技术: *Java*, *安卓应用开发*。</span>