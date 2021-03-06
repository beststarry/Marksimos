
{                                                                                                                            }
{                           D R A G O N   S I M U L A T I O N                                                                }
{                                                                                                                            }
{                                   Global Constants                                                                         }
{                                                                                                                            }
Const
  CompanyLengthMax              = 15;
  BrandNameLengthMax            =  5;
  SKUNameLengthMax              =  2;
  SeminarIDLengthMax            =  5;
  SeminarFullNameLengthMax      = 40;
  UserNameLengthMax             = 40;

  CompaniesMax                  = 6;
  BrandsMax                     = 5;
  SKUsMax                       = 5;

  AllBrandsMax                  = CompaniesMax * BrandsMax;
  AllSKUsMax                    = AllBrandsMax * SKUsMax;
  ConsumerSegmentsMax           = 6;
  ConsumerSegmentsMaxTotal      = ConsumerSegmentsMax + 1;  { .......................................... Last one for totals }

  TEN                           = 10;
  Last_CID                      = CompaniesMax;
  Last_CIDPlus                  = CompaniesMax + 1; { last for Administrator }
  Last_BID                      = TEN * Last_CID + BrandsMax;
  Last_SID                      = TEN * TEN * Last_CID + TEN * BrandsMax + SKUsMax;

  History_3                     = -3;
  History_2                     = -2;
  History_1                     = -1;
  History_0                     = 0;
  Period_0                      = 0;
  Period_Max                    = 9;
  Period_Display                = 6;       //Max period number of chart&data which displayed in the form and reports
  Never                         = Period_Max + 1;

  WeeksInQuarter                = 13;
  MonthsInYear                  = 12;

  EpisodesMax                   = WeeksInQuarter;
  EpisodesBeyondMax             = EpisodesMax + 1;
  StocksMax                     = 4;
  StocksMaxTotal                = StocksMax + 1;  { .................................................... Last one for totals }
  PriceMax                      = 2; { prices may be set for: current production (0), last period production (1), older production (2) }

  P_DimensionsMax               = 2;

  TechnologyUltimateLevel       = 20;
  IngredientsUltimateQuality    = TechnologyUltimateLevel + 2;
  TechnologyToImproveFreshness  = 11;
  AdditionalBudgetsMax          = 2;

  SimulationName                = 'MARKSIMOS'; 
  ReadParametersOK              = 0;
  ReadExogenousOK               = 0;
  ReadResultsOK                 = 0;

  LF                            = #13 + #10;
  FF                            = #12;
  TAB                           = #9;





