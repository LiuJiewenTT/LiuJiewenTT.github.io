# Home

<div style="display:flex; align-items:center; justify-content:center;">
  <img src="res/GH绘图1.png"/>
</div>

![ghpvc](https://komarev.com/ghpvc/?username=LiuJiewenTT&label=Profile%20views%20since%202025-2-6)

This is the personal home page of LiuJiewenTT.<br>
这里是刘杰文的个人主页。（持续更新中）

<div style="display:flex; align-items:center; justify-content:center;">
  <a href="https://github.com/anuraghazra/github-readme-stats">
    <img src="https://github-readme-stats.vercel.app/api?username=LiuJiewenTT&show_icons=true&count_private=true&include_all_commits=true" alt="LiuJiewenTT's GitHub stats" style="height:10em;">
  </a>
  <a href="https://github.com/anuraghazra/github-readme-stats">
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=LiuJiewenTT&layout=compact&langs_count=8&size_weight=0.9&count_weight=0.1&exclude_repo=LiuJiewenTT.github.io,leap-day,WinPaletter,sportsmeeting,ee308fz_lab1,MyDoc_A" alt="Top Langs" style="height:10em;">
  </a>
</div>

<link rel="stylesheet" href="css/main.css">
<link rel="stylesheet" href="css/special_classes.css">
<script src="js/main.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", async () => {
    await set_open_link_cls_inst_open_in_new_tab();
    console.log("已设置所有符合条件的open_link实例链接在新标签页打开。");
  });
</script>

{% include general.liquid %}

<p id="move_to_html_banner">如果您见到此行文字，请您移步至<a href="https://liujiewentt.github.io/">对应的网页</a>查看更加完整的呈现结果。</p>

<hr>

## 前言 {#preface}

距离我加入这里的那天已有7年了，在这些年里，我的开发水平不断提升着。我无法分出足够的时间和精力去用更新、更好的思路优化老项目，所以我总是尝试将其应用在我最新的项目中。这也使得，如果顺着一个个项目的创建时间看，看到的就是我的大半个技术水平进步的过程。


## 技能 {#skills}

详见：[详细技能](site_pages/详细技能.md).

|    Tech.     |                            About                             |
| :----------: | :----------------------------------------------------------- |
|    C/C++     | 非常熟悉。它是我当前工作使用的语言。这也是我最早开始接触的语言，也是中学时代参与竞赛(NOIP)并获奖时使用的语言。 |
|    Python    | 非常熟悉。我的大部分个人项目都使用Python进行开发以节省开发时间和提高效率，常用于最小可行性验证。会从字节码反汇编后的伪汇编代码手动翻译出源码（反编译）。我最喜欢这门语言，熟练度不低于C/C++，也更倾向于使用Python工作。 |
|    Batch     | 此处指Windows CMD批处理脚本。很熟悉，能良好运用，我有不少项目使用纯Bat开发。它极其便利，非常适合简单的目标。 |
|  JavaScript  |                熟悉，有若干次 *Firefox*/*Chromium* 浏览器插件开发的经历。                |
|    Linux     | 熟悉，有较长的使用经历，能在Linux上进行开发、编译、调试等工作。个人接触最多的是CentOS7和Ubuntu。 |
| 安卓应用开发  | 熟悉。开发过几个个人应用，例如：中秋博饼APP，HugFenny。 |

---

其他技能：ssh, virtual machine (Hyper-V / VMware), markdown, git, gdb debugging, Adobe XD


## 个人成果 {#my_works}

> - 以下项目不限状态，可能是已完成或是开发中。
> - 项目可能符合多个类别，但仅分组在最合适的类别中（优先以主题聚合，平台和技术分类次之）。

> 内容持续更新中

### 游戏相关


<details open><summary>尘白禁区工具集</summary>
  <details open><summary>切服器</summary>
    <dl>
      <dt><strong>Snowbreak_ServerSwitcher<a href="https://github.com/LiuJiewenTT/Snowbreak_ServerSwitcher">{{open_link}}</a></strong></dt>
      <dd>
        用于切换不同渠道的启动器，以连接到不同的《尘白禁区》服务器(纯bat脚本实现)，支持在国服与国际服之间切换。<span class="used_tech"><em>batch</em></span>
        <div class="project_badges">
          <img alt="GitHub Downloads (all assets, all releases)" src="https://img.shields.io/github/downloads/LiuJiewenTT/Snowbreak_ServerSwitcher/total">
          <img alt="GitHub Release" src="https://img.shields.io/github/v/release/LiuJiewenTT/Snowbreak_ServerSwitcher">
        </div>
      </dd>
      <!--  -->
      <dt><strong>CBJQ_SS_FrontEnd-tk<a href="https://github.com/LiuJiewenTT/CBJQ_SS_FrontEnd-tk">{{open_link}}</a></strong></dt>
      <dd>
        《尘白禁区》服务器切换器的前端程序（使用tkinter作为GUI库），支持个性化的配置多。<span class="used_tech"><em>Python</em>, <em>tkinter</em>, <em>PyInstaller</em></span>
        <div class="project_badges">
          <img alt="GitHub Downloads (all assets, all releases)" src="https://img.shields.io/github/downloads/LiuJiewenTT/CBJQ_SS_FrontEnd-tk/total">
          <img alt="GitHub Release" src="https://img.shields.io/github/v/release/LiuJiewenTT/CBJQ_SS_FrontEnd-tk">
        </div>
      </dd>
      <!--  -->
      <dt><strong>CBJQ_SS StartWrapper<a href="https://github.com/LiuJiewenTT/CBJQ_SS.StartWrapper">{{open_link}}</a></strong></dt>
      <dd>
        切服器的辅助启动程序，主要用于提权运行和引导<code>preference.json</code>的调用，附加观察启动器输出内容的功能。此程序已经成为切服器的重要组成部分。<span class="used_tech"><em>C</em></span>
      </dd>
      <!--  -->
      <dt><strong>CBJQ_SS QuickStart<a href="https://github.com/LiuJiewenTT/CBJQ_SS.QS">{{open_link}}</a></strong></dt>
      <dd>
        <strong>一键启动</strong>程序，可以快速切服并启动对应的启动器。<span class="used_tech"><em>C</em></span>
      </dd>
    </dl>
  </details>
  <dl>
    <dt>尘白启动器下载器<a href="https://github.com/LiuJiewenTT/snow_launcher_downloader">{{open_link}}</a></dt>
    <dd>
      一个用于下载《尘白禁区》启动器的工具，支持自动检测最新版本并下载。<span class="used_tech"><em>JavaScript</em></span>
    </dd>
    <!--  -->
    <dt>尘白H5游戏“猜拳卸甲”UI隐藏<strong>浏览器插件</strong><a href="https://github.com/LiuJiewenTT/CBJQ_CQXJ_HideUI">{{open_link}}</a></dt>
    <dd>
      一个用于隐藏《尘白禁区》H5游戏“猜拳卸甲”UI的浏览器插件，支持Chrome系和Firefox系浏览器。<span class="used_tech"><em>JavaScript</em>, <em>WebExtensions</em></span>
    </dd>
    <!--  -->
    <dt>尘白VR启动工具<a href="https://github.com/LiuJiewenTT/CBJQ_Mainland_VR_Start">{{open_link}}</a></dt>
    <dd>
      一个用于以VR模式加载《尘白禁区》的UEVR插件注入工具，支持国服。<span class="used_tech"><em>C++</em>, <em>Win32 API</em></span>
    </dd>
  </dl>
  <details open><summary>本地化开关管理工具</summary>
    <dl>
      <dt>CBJQ_XiaoKaiGuan<a href="https://github.com/LiuJiewenTT/CBJQ_XiaoKaiGuan">{{open_link}}</a></dt>
      <dd>
        针对PC端的本地化开关管理工具，可以方便地管理游戏的本地化开关状态。<span class="used_tech"><em>C</em>, <em>Win32 API</em></span>
      </dd>
      <!--  -->
      <dt>CBJQ_HugFenny-PC<a href="https://github.com/LiuJiewenTT/CBJQ_HugFenny-PC">{{open_link}}</a></dt>
      <dd>
        针对安卓端的本地化开关管理工具，运行于Windows PC平台，可以方便地管理安卓设备上多个游戏版本的本地化开关状态。<span class="used_tech"><em>C++</em>, <em>Win32 API</em>, <em>TUI</em>, <em>ADB</em></span>
      </dd>
      <!--  -->
      <dt>CBJQ_HugFenny<a href="https://github.com/LiuJiewenTT/CBJQ_HugFenny">{{open_link}}</a></dt>
      <dd>
        针对安卓端的本地化开关管理工具，运行于安卓平台，可以方便地管理本地上多个游戏版本的本地化开关状态。<span class="used_tech"><em>Java</em>, <em>Android APP</em>, <em>Shizuku</em>, <em>ADB</em></span>
      </dd>
    </dl>
  </details>
</details>

<dl>
  <dt><strong>VPet Mod Sync<a href="https://github.com/LiuJiewenTT/vpet_modsync">{{open_link}}</a></strong></dt>
  <dd>
    这是一个为 <em>VPet Simulator（虚拟桌宠模拟器）</em> 定制的模组同步用途的模组。它使用 <em>Junction</em> 以免除手动复制或移动的操作来使软件在离线时也一定能加载到模组。从 <em>Steam创意工坊</em> 订阅的资源不会被移动，因此“同步”指在本地范围内进行同步，不影响创意工坊更新资源，也不需要额外的操作。自2023年9月8日发布以来，模组得到了很好的反响，7天内<strong title="数据截止至2023年9月14日">订阅率超96% (1134/1179)</strong>，现已被纳入<span title="数据截止至2025年3月19日">399个合集</span>。<span class="used_tech"><em>batch</em></span>
    <div class="project_badges">
      <img alt="Steam Downloads" src="https://img.shields.io/steam/downloads/3032653569">
      <img alt="Steam Subscriptions" src="https://img.shields.io/steam/subscriptions/3032653569">
      <img alt="Steam Views" src="https://img.shields.io/steam/views/3032653569">
    </div>
  </dd>
  <!--  -->
  <dt>BirdMC<a href="https://github.com/LiuJiewenTT/BirdMC_original">{{open_link}}</a></dt>
  <dd>
    专门裁剪图片的工具，主要用于《我的世界》地图画制作。使用鼠标选择划出图片中要裁剪出的方形，就可以得到一系列固定大小 (128x128) 的图片。<span class="used_tech"><em>Python</em>, <em>PyInstaller</em></span>
  </dd>
  <!--  -->
  <dt>MCMDC<a href="https://github.com/LiuJiewenTT/MCModDependencyCheck">{{open_link}}</a></dt>
  <dd>
    使用此工具可以检查《我的世界》Java版（Forge端）的模组依赖，而无需启动游戏。<span class="used_tech"><em>Python</em></span>
  </dd>
  <!--  -->
  <dt>L4D2_OfflineAssistant<a href="https://github.com/LiuJiewenTT/L4D2_OfflineAssistant">{{open_link}}</a></dt>
  <dd>
    这是一个为 <em>Left 4 Dead 2</em> 游戏设计的模组离线加载助手。如果网络不佳，无法获取到资源订阅列表，从 <em>Steam创意工坊</em> 下载的模组在启动时会被游戏本体清除。这将导致本不必出现的漫长的重新下载过程和的硬盘寿命的损耗。一个常见的做法是将模组移到上一层储存，但是会使目录凌乱，还无法在游戏内查看附加的描述信息，不利于游戏内管理资源。为此，我开发了这个工具，在启动游戏前确保工具正在运行，或使用它启动游戏，可以避免上述两个问题。<span class="used_tech"><em>batch</em></span>
  </dd>
  <!--  -->
  <dt>MCVINE<a href="https://github.com/LiuJiewenTT/L4D2_OfflineAssistant">{{open_link}}</a></dt>
  <dd>
    曾经的私有工具，供小伙伴更好地游玩网易版《我的世界》（PC、Java Edition）。它最初名为 <em><a href="https://github.com/LiuJiewenTT/mcmod">mcmod</a></em>，只能添加自选模组。在进一步发展的过程中，为了避免混淆，改名为此，并逐渐加入了添加任意资源的能力。随着本人离开了网易版《我的世界》，也不再关注后续更新，此项目终止发展。<span class="used_tech"><em>batch</em></span>
  </dd>
  <!--  -->
  <dt>CreatePlus Crack<a href="https://www.curseforge.com/minecraft/mc-mods/create-x-createplus-1-18-forge-0-5-1-0-5-1a">{{open_link}}</a></dt>
  <dd>
    一个修改字节码的《我的世界》Java版（Forge端）的机械动力模组的附属模组 <em>Create Plus（现名 Create Goggles）</em>版本。原模组在特定版本组合上不兼容，在等待了作者很久仍然没有动静后自行修改了<code>.class</code>文件中的引用。<span class="used_tech"><em>Java</em></span>
    <div class="project_badges">
      <img id="CreatePlus_Downloads" alt="CreatePlus downloads, 100+ times per month." src="https://cf.way2muchnoise.eu/full_886763_downloads.svg" />
    </div>
  </dd>
</dl>


### Windows应用和工具


<dl>
  <details open><summary>GCC项目初始化工具</summary>
    <p>在使用 <em>MinGW</em> 的 <em>GCC</em> 编写 <em>C</em> 或 <em>C++</em> 项目时，如果没有使用诸如 <em>Git Bash</em>, <em>MSYS2</em>, <em>WSL</em> 这样的技术，就没法好好使用<code>make</code>命令；此外，创建新项目时还需要设计目录结构并编写相应的<code>makefile</code>文件过于繁琐。这对上述两个问题，我开发了以下三个<strong>模板</strong>项目，用以提高便利性和兼容性。</p>
    <dl>
      <dt>WinEnv4MinGW-GCC<a href="https://github.com/LiuJiewenTT/WinEnv4MinGW-GCC">{{open_link}}</a></dt>
      <dd>
        使用这套工具，可以方便地在 <em>Windows系统</em> 上构建 <em>GCC程序</em>。这套程序提供<code>make</code>命令的链接（支持重新链接），可直接使用<code>make</code>命令。<span class="used_tech"><em>batch</em></span>
      </dd>
      <!--  -->
      <dt>WinGCCProjectStarter1<a href="https://github.com/LiuJiewenTT/WinGCCProjectStarter1">{{open_link}}</a></dt>
      <dd>
        以此为模板，可以方便地启动一个 <em>C</em> 语言项目，随时开始编译。<span class="used_tech"><em>batch</em>, <em>Makefile</em></span>
      </dd>
      <!--  -->
      <dt>WinGPPProjectStarter1<a href="https://github.com/LiuJiewenTT/WinGPPProjectStarter1">{{open_link}}</a></dt>
      <dd>
        以此为模板，可以方便地启动一个 <em>C++</em> 语言项目，随时开始编译。<span class="used_tech"><em>batch</em>, <em>Makefile</em></span>
      </dd>
    </dl>
  </details>
  <!--  -->
  <dt>IconFold<a href="https://github.com/LiuJiewenTT/IconFold">{{open_link}}</a></dt>
  <dd>
    使用这套工具，可以方便地提取文件夹使用的自定义图标，也可以以不同的方式给文件夹应用或取消应用自定义图标。图标可以是你预想的任何有效 <em>.ico</em> 文件。<span class="used_tech"><em>batch</em></span>
  </dd>
  <!--  -->
  <dt>TraceOpenedFiles<a href="https://github.com/LiuJiewenTT/TraceOpenedFiles">{{open_link}}</a></dt>
  <dd>
    使用此工具可以方便地监视一个程序使用文件的情况。此工具支持多种监视对象获取方式，支持随程序启动开始监视，而无需手动传入信息。<span class="used_tech"><em>Python</em>, <em>PyInstaller</em></span>
  </dd>
  <!--  -->
  <dt>ThreadKiller<a href="https://github.com/TTStudio-of-TTPeter/ThreadKiller">{{open_link}}</a></dt>
  <dd>
    这是一套脚本工具，用于监视并结束指定进程以达成禁止运行的目的（部分情况可能需要提权运行）。自编完整的安装、重置和卸载逻辑，完整且简便的设置体验。<span class="used_tech"><em>batch</em></span>
  </dd>
</dl>


### 安卓APP


<dl>
  <dt>中秋博饼<a href="https://github.com/LiuJiewenTT/ee308fz_lab2">{{open_link}}</a></dt>
  <dd>
    一个单机的多人博饼游戏，另加入了一点特殊设定（彩蛋）。<span class="used_tech"><em>Java</em>, <em>Android APP</em></span>
  </dd>
</dl>


### General Projects


<dl>
  <dt><strong>leap-day-2<a href="https://github.com/LiuJiewenTT/leap-day-2">{{open_link}}</a></strong></dt>
  <dd>
    这是一个定制版 <em>jekyll-theme-leap-day</em> 主题，同样可以用于 <em>Github Pages</em>。相比原版，我特别适配了高分屏和缩放后呈现的比例，并提供了包括下载控制在内的一些适用于纯文档页的基本个性化配置（如果需要更丰富的纯文档库版本，可以参考我的 <em>leap-day<a href="https://github.com/LiuJiewenTT/leap-day">{{open_link}}</a></em>）。<span class="used_tech"><em>HTML</em>, <em>JavaScript</em>, <em>SCSS</em>, <em>Liquid</em>, <em>Jekyll</em></span>
  </dd>
  <dt>MergePDF<a href="https://github.com/LiuJiewenTT/MergePDF">{{open_link}}</a></dt>
  <dd>
    这是一个专注于PDF合并的简单程序。它实际上是对相关处理库的简单应用，只是有一个更适合命令行的交互界面(UI)，并额外提供一些操作选项和优化操作的可能。<span class="used_tech"><em>Python</em>, <em>PyInstaller</em></span>
  </dd>
</dl>

