
{                                                                                                                            }
{                                   M A R K S I M O S   S I M U L A T I O N                                                  }
{                                                                                                                            }
{                                   Global Declared Constants and Arrays                                                     }
{                                                                                                                            }
Const
  ActualSize                  : array[TPackSize] of single = ( 0.5, 1.0, 2.0 );
  WarrantyYears               : array[TWarrantyLength] of byte = ( 1, 3, 5 );
  EpisodesCount               : array[TSimulationVariant] of byte = ( 13, 12 );
  ObsoleteAge                 : array[TSimulationVariant] of TStocksAges = ( StocksMax - 2, StocksMaxTotal );
