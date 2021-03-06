
{                                                                                                                            }
{                           D R A G O N   S I M U L A T I O N                                                                }
{                                                                                                                            }
{                                   Global  Variables                                                                        }
{                                                                                                                            }

var
  ConfigurationFileFullName : String;
  //CurrentCharset            : TFontCharset;
  CurrentLanguage           : THCD_Language;
  CurrentCodePage           : Integer;
  DataDirectory             : String;
  DatabaseDirectory         : string;    //directory for Database  //added by hao
  BackupDirectory           : String;
  SeminarCode               : String;
  ProgramsDirectory         : String;
  OperatingMode             : TOperatingMode;
  GameVariant               : TSimulationVariant;
  TargetMarket              : TTargetMarket;
  IsActiveTeam              : TTeamsBooleans;
  PeriodType                : TPeriodType;
  EpisodeType               : TEpisodeType;
  TraceOn                   : boolean;
  PGen                      : TGeneralParameters;
  PSeg                      : TSegmentsParameters;
  XNow, XNext, XPrev        : TExogenous;
  CurrentPeriod             : TPeriodNumber;
  SimulationSpan            : TPeriodNumber;
  //added by hao 11-07-27
  CurrencyType              : string; //'($)' or '(RMB)'
  CurrencyType_mln          : string; //'($mln)' or '(RMBmln)
  CurrencyType_withoutBrackets : string; //'$' or '(RMB)'
