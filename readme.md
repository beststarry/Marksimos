# 环境设置



## 基本环境配置

### 前端包与依赖管理 使用Bower工具

* 安装Bower

1. 安装Bower到默认全局环境下
``` npm install -g bower ```

2. 安装Bower到当前项目下并写入package.json文件里面
``` npm install bower --save ```


* 安装前段的包与库资源,通过编辑 bower.json 文件,然后运行 ：
``` bower install ```

* 查看已安装的前段的包
``` bower list ```

* 安装前段的包与库资源,同时自动写入 bower.json 文件,然后运行 ：
``` bower install -S```
``` bower install --save```


### 后端(NodeJS)依赖安装：

* 编辑后端依赖列表文件 package.json 文件,然后运行
``` npm install --save-dev ```

* 查看当前已安装的包
``` npm ls ```



### Mongo 数据库安装：

* Mac下使用 Homebrew 安装 ``` brew install mongodb ```

* 安装完成后 可以

To have launchd start mongodb at login:
    ``` ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents ```
Then to load mongodb now:
    ``` launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist ```
Or, if you don't want/need launchctl, you can just run:
    ``` mongod --config /usr/local/etc/mongod.conf ```

* 运行mongo, 并指定数据库路径(默认路径在/usr/local/var/mongodb) ``` mongod --dbpath <path to data directory> ``` (请确保当前用户对数据库文件路径有读写权限)

* 或运行mongo, 并指定配置文件路径(默认的配置文件在 /usr/local/etc/mongod.conf) ``` mongod --dbpath <path to data directory> ```

* mongo 的配置文件范例

```
# Store data in /usr/local/var/mongodb instead of the default /data/db
# dbpath = /usr/local/var/mongodb
dbpath = /Users/jinwyp/Documents/mongodata

# Append logs to /usr/local/var/log/mongodb/mongo.log
# logpath = /usr/local/var/log/mongodb/mongo.log
logpath = /Users/jinwyp/Documents/mongolog/mongo.log
logappend = true

# Only accept local connections
bind_ip = 127.0.0.1


# fork = true
# port = 27017
# quiet = true
# journal = true

```


##后端Delphi CGI环境配置

# Delphi 部署时 配置 \cgi-bin\CgiConfig 需要更改 相应的配置 注意windows server 的64或32位路径不同



# 代码架构说明

## 前端

## 后端




#Delphi 代码说明#
##Directory layout##
```
trunk
├── AdminCockpit
│   ├── MA0\ Brands\ Market\ Studies.INC  				  ------> Organize reports&charts based on result 
│   ├── MA0\ Companies\ Market\ Studies.INC
│   ├── MA0\ SKUs\ Market\ Studies.INC
│   ├── MA0_Brands_PerceptionMaps.pas
│   ├── MA0_Brands_Profiles.pas
│   ├── MA0_Brands_ProfitabilityEvolution.pas
│   ├── MA0_Companies_PerceptionMaps.pas
│   ├── MA0_Companies_Profiles.pas
│   ├── MA0_Companies_ProfitabilityEvolution.pas
│   ├── MA0_CompetitiveIntelligence.pas
│   ├── MA0_ConsumersSurvey.pas
│   ├── MA0_FinalScores.dfm
│   ├── MA0_FinalScores.pas
│   ├── MA0_FinancialReports.pas
│   ├── MA0_FinancialReports_TN.pas
│   ├── MA0_MarketSurveys.pas
│   ├── MA0_SKUs_PerceptionMaps.pas
│   ├── MA0_SKUs_Profiles.pas
│   ├── MA0_SKUs_ProfitabilityEvolution.pas
│   ├── MA0_Segments_PerceptionMaps.pas
│   └── uAdminUtilities.pas                       ------> InitializeFilesAndRun : a example for running [I]
├── Common
│   ├── HCD\ Viewer\ Data\ Structure.INC 				  ------> Data structure for viewer 
│   ├── HCD_SystemDefinitions.pas                         ------> Global Constants #1
│   ├── MA0\ Files\ Names.INC 							  ------> Binary constant file names
│   ├── MA0\ Global\ Constants.INC  				      ------> Global Constants #2
│   ├── MA0\ Global\ Declared\ Constants\ and\ Arrays.INC ------> Global Constants #3
│   ├── MA0\ Global\ Types.INC 							  ------> Global Type (Result&Decision)
│   ├── MA0\ Global\ Variables.INC 						  ------> Gloabl variables (useless)
│   ├── MA0\ String\ IDs.INC 						      ------> String IDs (useless)
│   ├── MA0_AdministratorImportedElements.pas             ------> Loading DLL [I][K] in dynamic way
│   ├── MA0_ImportedElements.pas 						  ------> using CommonFunctions.DLL
│   ├── MA0_Indices.pas                                   ------> calculate Brand/SKU idx
│   ├── MA0_SharedElements.pas                            ------> Loading result of module [E][P] 
│   ├── MA0_StocksSynthesis.pas 	 					  ------> stocks synthesis (useless)
│   ├── MA0_UnitCostPrice.pas                             ------> unitCost calculation function
│   └── uDecisionFileIO.pas                               ------> Deicision Binary I/O
├── Data\ Viewer
├── Decisions
├── Execs
├── Exogenous
├── Initialisation
├── Kernel
├── Parameters
└── ...
```

##Marksimos reports implementation : where to find related field?##

Company status:
```
trunk/AdminCockpit/MA0_Companies_Profiles.pas
trunk/AdminCockpit/MA0_Brands_Profiles.pas
trunk/AdminCockpit/MA0_SKUs_Profiles.pas
```

Financial data -> Financial report:
```
trunk/AdminiCockpit/MA0_FinancialReports.pas
trunk/AdminiCockpit/MA0_FinancialReports_TN.pas
```

Financial data -> Profitability Evolution:
```
trunk/AdminCockpit/MA0_Companies_ProfitabilityEvolution.pas
trunk/AdminCockpit/MA0_Brands_ProfitabilityEvolution.pas
trunk/AdminCockpit/MA0_SKUs_ProfitabilityEvolution.pas
```

Segment distribution:
```
trunk/AdminCockpit/MA0_ConsumerSurvey.pas
```

Competitor info -> Competitor intelligence 
```
trunk/AdminCockpit/MA0_CompetitveIntelligence.pas
```

Competitor info -> Market Trends
```
trunk/AdminCockpit/MA0_MarketSurveys.pas
trunk/AdminCockpit/MA0 Companies Market Studies.INC
trunk/AdminCockpit/MA0 Brands Market Studies.INC
trunk/AdminCockpit/MA0 SKUs Market Studies.INC
```

##Marksimos decision module implementation : where to find related field?##

Portfolio structure 
```
trunk/Decisions/uPortfoliostructure.pas
```

SKU info pop window
```
trunk/Decisions/uSKUInfoMain.pas
```

Spending Info window
```
trunk/Decisions/uFromSpendingVersusBudget/pas
```

Research development reference window
```
trunk/Decisions/uFormResearchDev.pas
trunk/Decisions/uFormInvestmentRD.pas
```

Data input validation
```
uFormBrandDecision.pas
```


# Mongo 安装后

==> Caveats
To have launchd start mongodb at login:
    ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents
Then to load mongodb now:
    launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist
Or, if you don't want/need launchctl, you can just run:
    mongod --config /usr/local/etc/mongod.conf




# 运行
NODE_ENV=production nodemon app.js


Consumer Segment        | Description
---------               | -----
Price Sensitive         | Consumers accept that they cannot be too demanding on Image perception, since they care so much about price and the Value for money
Pretenders              | Consumers are also very price sensitive but they want to show off; therefore they look for high Image perception. 
Moderate                | Consumers are slightly less price sensitive than Segment 1, hence their expectations are slightly higher on both dimensions. 
Good Life               | Consumers are even less price sensitive than Segment 3 and expect more on Value as well as on Image. 
Ultimate                | Consumers are not really price sensitive. They can afford higher prices, but in exchange they ask for very high quality, hence they have high expectations on Value dimension. 
Pragmatic               | Consumers are well-educated and practical people with their strong judgments. They don’t follow fashion. They want very good Value offer, but Image aspect is for them a bit shallow and futile, which doesn’t mean that they would be happy with entry level products. They look for something decent. 

| Segment Name      | Expected  Value Perception | Expected Image Perception  |
| :--------         | :--------:                 | :--:                       |
| Price Sensitive   | 24                         |  24                        |
| Pretenders        | 24                         |  45                        |
| Moderate          | 32                         |  30                        |
| Good Life         | 32                         |  36                        |
| Ultimate          | 53                         |  53                        |
| Pragmatic         | 52                         |  53                        |
