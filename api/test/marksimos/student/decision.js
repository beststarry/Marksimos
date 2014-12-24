﻿/// <reference path="../../../node_modules/jasmine/lib/jasmine.js" />
var request = require('request').defaults({ jar: true });
var studentApiPath = "http://localhost:3000/marksimos/api/";
var adminApiPath = "http://localhost:3000/marksimos/api/admin/";
var utility = require('../../testUtility.js');
var Q = require('q');

var studentList =[
    {
        email : 'anilraparla@hcdlearning.com',
        password : '123456'
    },
    {
        email : 'haosun@hcdlearning.com',
        password : '123456'
    },{
        email : 'jinwang@hcdlearning.com',
        password : '123456'
    },{
        email : 'yunsun@hcdlearning.com',
        password : '123456'
    }

];


var adminList =[
    {
        email : 'hcd_facilitator@hcdlearning.com',
        password : 'hcdfacilitator@9876'
    }
];


var semanerId = '10052';

var period1 = [
    {
        "_id": "5497aca52eb3c27817cd2027",
        "d_CID": 1,
        "d_CompanyName": "",
        "seminarId": "10050",
        "period": 1,
        "bs_BlockBudgetApplication": false,
        "bs_AdditionalBudgetApplicationCounter": 1,
        "d_InvestmentInServicing": 0,
        "d_InvestmentInTechnology": 110,
        "d_InvestmentInEfficiency": 190,
        "d_RequestedAdditionalBudget": 50,
        "d_IsAdditionalBudgetAccepted": true,
        "d_BrandsDecisions": [
            11,
            12,
            13
        ],
        "__v": 0,
        "brandDecisions": [
            {
                "_id": "5497aca52eb3c27817cd202b",
                "bs_PeriodOfBirth": 0,
                "d_CID": 1,
                "d_BrandID": 11,
                "d_BrandName": "APONE",
                "seminarId": "10050",
                "period": 1,
                "d_SKUsDecisions": [
                    111,
                    112,
                    113
                ],
                "d_SalesForce": 40,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497aca52eb3c27817cd2037",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 11,
                        "d_SKUID": 111,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 4,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 240,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 5,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 6.84999990463257,
                        "d_FactoryPrice": [
                            4.82938528060913,
                            4.82938528060913,
                            4.82938528060913
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 0
                    },
                    {
                        "_id": "5497aca52eb3c27817cd2038",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 11,
                        "d_SKUID": 112,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0.05,
                        "d_WholesalesBonusMinVolume": 10,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 4,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            true
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 2,
                        "d_PackSize": 0,
                        "d_IngredientsQuality": 4,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 3.262320023246011,
                        "d_FactoryPrice": [
                            2.3,
                            3.06683588027954,
                            3.06683588027954
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 6
                    },
                    {
                        "_id": "5497aca52eb3c27817cd2039",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 11,
                        "d_SKUID": 113,
                        "d_SKUName": "_3",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 4,
                        "d_TargetConsumerSegment": 2,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 150,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 5,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 7.19999980926514,
                        "d_FactoryPrice": [
                            5.07614183425903,
                            5.07614183425903,
                            5.07614183425903
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 0
                    }
                ]
            },
            {
                "_id": "5497aca52eb3c27817cd202c",
                "bs_PeriodOfBirth": 0,
                "d_CID": 1,
                "d_BrandID": 12,
                "d_BrandName": "ACOOP",
                "seminarId": "10050",
                "period": 1,
                "d_SKUsDecisions": [
                    121
                ],
                "d_SalesForce": 40,
                "__v": 2,
                "SKUDecisions": [
                    {
                        "_id": "5497aca52eb3c27817cd203a",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 12,
                        "d_SKUID": 121,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0.05,
                        "d_WholesalesBonusMinVolume": 10,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 5,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 1,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 22.69440016171138,
                        "d_FactoryPrice": [
                            16,
                            17.6254940032959,
                            17.6254940032959
                        ],
                        "d_AdditionalTradeMargin": 0.02,
                        "d_Advertising": 20,
                        "__v": 1
                    }
                ]
            },
            {
                "_id": "5497aca52eb3c27817cd202d",
                "bs_PeriodOfBirth": 0,
                "d_CID": 1,
                "d_BrandID": 13,
                "d_BrandName": "AOLIV",
                "seminarId": "10050",
                "period": 1,
                "d_SKUsDecisions": [
                    131,
                    132
                ],
                "d_SalesForce": 40,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497aca52eb3c27817cd203b",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 13,
                        "d_SKUID": 131,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 6,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 40,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 5,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 9.5,
                        "d_FactoryPrice": [
                            6.69768762588501,
                            6.69768762588501,
                            6.69768762588501
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 0
                    },
                    {
                        "_id": "5497aca52eb3c27817cd203c",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 13,
                        "d_SKUID": 132,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 6,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 10,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 6,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 10.8000001907349,
                        "d_FactoryPrice": [
                            7.61421346664429,
                            7.61421346664429,
                            7.61421346664429
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 0
                    }
                ]
            }
        ],
        "SKUDecisions": null
    },
    {
        "_id": "5497aca52eb3c27817cd2028",
        "d_CID": 2,
        "d_CompanyName": "",
        "seminarId": "10050",
        "period": 1,
        "bs_BlockBudgetApplication": false,
        "bs_AdditionalBudgetApplicationCounter": 0,
        "d_InvestmentInServicing": 0,
        "d_InvestmentInTechnology": 190,
        "d_InvestmentInEfficiency": 200,
        "d_RequestedAdditionalBudget": 0,
        "d_IsAdditionalBudgetAccepted": false,
        "d_BrandsDecisions": [
            21,
            22,
            23
        ],
        "__v": 0,
        "brandDecisions": [
            {
                "_id": "5497aca52eb3c27817cd202e",
                "bs_PeriodOfBirth": 0,
                "d_CID": 2,
                "d_BrandID": 21,
                "d_BrandName": "BOBOB",
                "seminarId": "10050",
                "period": 1,
                "d_SKUsDecisions": [
                    211,
                    212,
                    213
                ],
                "d_SalesForce": 60,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497aca52eb3c27817cd203d",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 21,
                        "d_SKUID": 211,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0.05,
                        "d_WholesalesBonusMinVolume": 10,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 5,
                        "d_TargetConsumerSegment": 4,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 1,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 6,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 8.935920063673855,
                        "d_FactoryPrice": [
                            6.3,
                            6.34517765045166,
                            6.34517765045166
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 1
                    },
                    {
                        "_id": "5497aca52eb3c27817cd203e",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 21,
                        "d_SKUID": 212,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0.05,
                        "d_WholesalesBonusMinVolume": 10,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 5,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 5,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 4,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 14.6000003814697,
                        "d_FactoryPrice": [
                            10.293288230896,
                            10.293288230896,
                            10.293288230896
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 0
                    },
                    {
                        "_id": "5497aca52eb3c27817cd203f",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 21,
                        "d_SKUID": 213,
                        "d_SKUName": "_3",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0.05,
                        "d_WholesalesBonusMinVolume": 10,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 5,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 30,
                        "d_PackSize": 0,
                        "d_IngredientsQuality": 4,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 3.625,
                        "d_FactoryPrice": [
                            2.55569648742676,
                            2.55569648742676,
                            2.55569648742676
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 0
                    }
                ]
            },
            {
                "_id": "5497aca52eb3c27817cd202f",
                "bs_PeriodOfBirth": 0,
                "d_CID": 2,
                "d_BrandID": 22,
                "d_BrandName": "BSOFE",
                "seminarId": "10050",
                "period": 1,
                "d_SKUsDecisions": [
                    221
                ],
                "d_SalesForce": 60,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497aca52eb3c27817cd2040",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 22,
                        "d_SKUID": 221,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0.02,
                        "d_WholesalesBonusMinVolume": 5,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 5,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 40,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 12.6000003814697,
                        "d_FactoryPrice": [
                            8.88324928283691,
                            8.88324928283691,
                            8.88324928283691
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 0
                    }
                ]
            },
            {
                "_id": "5497aca52eb3c27817cd2030",
                "bs_PeriodOfBirth": 0,
                "d_CID": 2,
                "d_BrandID": 23,
                "d_BrandName": "BJUNE",
                "seminarId": "10050",
                "period": 1,
                "d_SKUsDecisions": [
                    231,
                    232
                ],
                "d_SalesForce": 50,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497aca52eb3c27817cd2041",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 23,
                        "d_SKUID": 231,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0.02,
                        "d_WholesalesBonusMinVolume": 5,
                        "d_TradeExpenses": 10,
                        "d_ToDrop": false,
                        "d_Technology": 4,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 50,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 5,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 14,
                        "d_FactoryPrice": [
                            9.87027645111084,
                            9.87027645111084,
                            9.87027645111084
                        ],
                        "d_AdditionalTradeMargin": 0.02,
                        "d_Advertising": 20,
                        "__v": 0
                    },
                    {
                        "_id": "5497aca52eb3c27817cd2042",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 23,
                        "d_SKUID": 232,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0.02,
                        "d_WholesalesBonusMinVolume": 5,
                        "d_TradeExpenses": 10,
                        "d_ToDrop": false,
                        "d_Technology": 4,
                        "d_TargetConsumerSegment": 2,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 25,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 6,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 7.55000019073486,
                        "d_FactoryPrice": [
                            5.32289934158325,
                            5.32289934158325,
                            5.32289934158325
                        ],
                        "d_AdditionalTradeMargin": 0.02,
                        "d_Advertising": 20,
                        "__v": 0
                    }
                ]
            }
        ],
        "SKUDecisions": null
    },
    {
        "_id": "5497aca52eb3c27817cd2029",
        "d_CID": 3,
        "d_CompanyName": "",
        "seminarId": "10050",
        "period": 1,
        "bs_BlockBudgetApplication": false,
        "bs_AdditionalBudgetApplicationCounter": 0,
        "d_InvestmentInServicing": 0,
        "d_InvestmentInTechnology": 200,
        "d_InvestmentInEfficiency": 450,
        "d_RequestedAdditionalBudget": 0,
        "d_IsAdditionalBudgetAccepted": false,
        "d_BrandsDecisions": [
            31,
            32,
            33
        ],
        "__v": 0,
        "brandDecisions": [
            {
                "_id": "5497aca52eb3c27817cd2031",
                "bs_PeriodOfBirth": 0,
                "d_CID": 3,
                "d_BrandID": 31,
                "d_BrandName": "CASAH",
                "seminarId": "10050",
                "period": 1,
                "d_SKUsDecisions": [
                    311,
                    312,
                    313
                ],
                "d_SalesForce": 0,
                "__v": 2,
                "SKUDecisions": [
                    {
                        "_id": "5497aca52eb3c27817cd2043",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 31,
                        "d_SKUID": 311,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0.01,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 6,
                        "d_TargetConsumerSegment": 2,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            true,
                            true
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 20,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 8,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 9.914616070647659,
                        "d_FactoryPrice": [
                            6.99,
                            6.55668354034424,
                            6.55668354034424
                        ],
                        "d_AdditionalTradeMargin": 0.02,
                        "d_Advertising": 10,
                        "__v": 3
                    },
                    {
                        "_id": "5497aca52eb3c27817cd2044",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 31,
                        "d_SKUID": 312,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0.05,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 6,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            true,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 10,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 8,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 15.588216111075502,
                        "d_FactoryPrice": [
                            10.99,
                            11.209813117981,
                            11.209813117981
                        ],
                        "d_AdditionalTradeMargin": 0.1,
                        "d_Advertising": 5,
                        "__v": 3
                    },
                    {
                        "_id": "5497aca52eb3c27817cd2045",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 31,
                        "d_SKUID": 313,
                        "d_SKUName": "_3",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0.01,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 6,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            true,
                            true,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 30,
                        "d_ProductionVolume": 50,
                        "d_PackSize": 0,
                        "d_IngredientsQuality": 8,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 3.4041600242567065,
                        "d_FactoryPrice": [
                            2.4,
                            2.52044558525085,
                            2.52044558525085
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 4
                    }
                ]
            },
            {
                "_id": "5497aca52eb3c27817cd2032",
                "bs_PeriodOfBirth": 0,
                "d_CID": 3,
                "d_BrandID": 32,
                "d_BrandName": "CEEKE",
                "seminarId": "10050",
                "period": 1,
                "d_SKUsDecisions": [
                    321,
                    322
                ],
                "d_SalesForce": 0,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497aca52eb3c27817cd2046",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 32,
                        "d_SKUID": 321,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 5,
                        "d_TargetConsumerSegment": 4,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 10,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 5,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 12.76560009096265,
                        "d_FactoryPrice": [
                            9,
                            10.0817823410034,
                            10.0817823410034
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 0,
                        "__v": 1
                    },
                    {
                        "_id": "5497aca52eb3c27817cd2047",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 32,
                        "d_SKUID": 322,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 5,
                        "d_TargetConsumerSegment": 4,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 10,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 5,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 12.76560009096265,
                        "d_FactoryPrice": [
                            9,
                            11.7033281326294,
                            11.7033281326294
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 0,
                        "__v": 1
                    }
                ]
            },
            {
                "_id": "5497aca52eb3c27817cd2033",
                "bs_PeriodOfBirth": 0,
                "d_CID": 3,
                "d_BrandID": 33,
                "d_BrandName": "CCHIN",
                "seminarId": "10050",
                "period": 1,
                "d_SKUsDecisions": [
                    331
                ],
                "d_SalesForce": 0,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497aca52eb3c27817cd2048",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 33,
                        "d_SKUID": 331,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 2,
                        "d_TradeExpenses": 10,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 5,
                        "d_PromotionalEpisodes": [
                            true,
                            true,
                            true,
                            true,
                            true,
                            false,
                            false,
                            true,
                            true,
                            true,
                            true,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 20,
                        "d_ProductionVolume": 30,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 14.169816100968541,
                        "d_FactoryPrice": [
                            9.99,
                            8.24873065948486,
                            8.24873065948486
                        ],
                        "d_AdditionalTradeMargin": 0.02,
                        "d_Advertising": 50,
                        "__v": 11
                    }
                ]
            }
        ],
        "SKUDecisions": null
    },
    {
        "_id": "5497aca52eb3c27817cd202a",
        "d_CID": 4,
        "d_CompanyName": "",
        "seminarId": "10050",
        "period": 1,
        "bs_BlockBudgetApplication": false,
        "bs_AdditionalBudgetApplicationCounter": 0,
        "d_InvestmentInServicing": 0,
        "d_InvestmentInTechnology": 0,
        "d_InvestmentInEfficiency": 0,
        "d_RequestedAdditionalBudget": 0,
        "d_IsAdditionalBudgetAccepted": false,
        "d_BrandsDecisions": [
            41,
            42,
            43
        ],
        "__v": 0,
        "brandDecisions": [
            {
                "_id": "5497aca52eb3c27817cd2034",
                "bs_PeriodOfBirth": 0,
                "d_CID": 4,
                "d_BrandID": 41,
                "d_BrandName": "DOPOL",
                "seminarId": "10050",
                "period": 1,
                "d_SKUsDecisions": [
                    411,
                    412
                ],
                "d_SalesForce": 0,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497aca52eb3c27817cd2049",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 41,
                        "d_SKUID": 411,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 4,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 0,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 4,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 7.15000009536743,
                        "d_FactoryPrice": [
                            5.04089117050171,
                            5.04089117050171,
                            5.04089117050171
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 0,
                        "__v": 0
                    },
                    {
                        "_id": "5497aca52eb3c27817cd204a",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 41,
                        "d_SKUID": 412,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 4,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 0,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 5,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 14.3999996185303,
                        "d_FactoryPrice": [
                            10.1522836685181,
                            10.1522836685181,
                            10.1522836685181
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 0,
                        "__v": 0
                    }
                ]
            },
            {
                "_id": "5497aca52eb3c27817cd2035",
                "bs_PeriodOfBirth": 0,
                "d_CID": 4,
                "d_BrandID": 42,
                "d_BrandName": "DOOOP",
                "seminarId": "10050",
                "period": 1,
                "d_SKUsDecisions": [
                    421,
                    422
                ],
                "d_SalesForce": 0,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497aca52eb3c27817cd204b",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 42,
                        "d_SKUID": 421,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 5,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 0,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 4,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 7.44999980926514,
                        "d_FactoryPrice": [
                            5.25239706039429,
                            5.25239706039429,
                            5.25239706039429
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 0,
                        "__v": 0
                    },
                    {
                        "_id": "5497aca52eb3c27817cd204c",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 42,
                        "d_SKUID": 422,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 5,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 0,
                        "d_PackSize": 0,
                        "d_IngredientsQuality": 5,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 3.75,
                        "d_FactoryPrice": [
                            2.64382410049438,
                            2.64382410049438,
                            2.64382410049438
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 0,
                        "__v": 0
                    }
                ]
            },
            {
                "_id": "5497aca52eb3c27817cd2036",
                "bs_PeriodOfBirth": 0,
                "d_CID": 4,
                "d_BrandID": 43,
                "d_BrandName": "DOYAL",
                "seminarId": "10050",
                "period": 1,
                "d_SKUsDecisions": [
                    431,
                    432
                ],
                "d_SalesForce": 0,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497aca52eb3c27817cd204d",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 43,
                        "d_SKUID": 431,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 6,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 0,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 7,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 11.25,
                        "d_FactoryPrice": [
                            7.931471824646,
                            7.931471824646,
                            7.931471824646
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 0,
                        "__v": 0
                    },
                    {
                        "_id": "5497aca52eb3c27817cd204e",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 43,
                        "d_SKUID": 432,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 1,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 5,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 0,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 12.5500001907349,
                        "d_FactoryPrice": [
                            8.84799766540527,
                            8.84799766540527,
                            8.84799766540527
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 0,
                        "__v": 0
                    }
                ]
            }
        ],
        "SKUDecisions": null
    }
];

var period2 = [
    {
        "_id": "5497c816830f3e43195a5577",
        "d_CID": 1,
        "d_CompanyName": "",
        "seminarId": "10050",
        "period": 2,
        "bs_BlockBudgetApplication": false,
        "bs_AdditionalBudgetApplicationCounter": 1,
        "d_InvestmentInServicing": 0,
        "d_InvestmentInTechnology": 110,
        "d_InvestmentInEfficiency": 100,
        "d_RequestedAdditionalBudget": 0,
        "d_IsAdditionalBudgetAccepted": false,
        "d_BrandsDecisions": [
            11,
            12,
            13
        ],
        "__v": 0,
        "brandDecisions": [
            {
                "_id": "5497c815830f3e43195a556b",
                "bs_PeriodOfBirth": 0,
                "d_CID": 1,
                "d_BrandID": 11,
                "d_BrandName": "APONE",
                "seminarId": "10050",
                "period": 2,
                "d_SKUsDecisions": [
                    111,
                    112,
                    113
                ],
                "d_SalesForce": 35,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497c815830f3e43195a5553",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 11,
                        "d_SKUID": 111,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 4,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 300,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 5,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 6.84999990463257,
                        "d_FactoryPrice": [
                            4.82938528060913,
                            4.82938528060913,
                            4.82938528060913
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 0
                    },
                    {
                        "_id": "5497c815830f3e43195a5554",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 11,
                        "d_SKUID": 112,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 4,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            true
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 250,
                        "d_PackSize": 0,
                        "d_IngredientsQuality": 4,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 3.262320023246011,
                        "d_FactoryPrice": [
                            2.3,
                            3.06683588027954,
                            3.06683588027954
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 0
                    },
                    {
                        "_id": "5497c815830f3e43195a5555",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 11,
                        "d_SKUID": 113,
                        "d_SKUName": "_3",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 4,
                        "d_TargetConsumerSegment": 2,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 170,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 5,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 7.19999980926514,
                        "d_FactoryPrice": [
                            5.07614183425903,
                            5.07614183425903,
                            5.07614183425903
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 0
                    }
                ]
            },
            {
                "_id": "5497c815830f3e43195a556c",
                "bs_PeriodOfBirth": 0,
                "d_CID": 1,
                "d_BrandID": 12,
                "d_BrandName": "ACOOP",
                "seminarId": "10050",
                "period": 2,
                "d_SKUsDecisions": [
                    121
                ],
                "d_SalesForce": 35,
                "__v": 2,
                "SKUDecisions": [
                    {
                        "_id": "5497c815830f3e43195a5556",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 12,
                        "d_SKUID": 121,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 9,
                        "d_TargetConsumerSegment": 5,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 77,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 11,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 29.786400212246186,
                        "d_FactoryPrice": [
                            21,
                            17.6254940032959,
                            17.6254940032959
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 1
                    }
                ]
            },
            {
                "_id": "5497c815830f3e43195a556d",
                "bs_PeriodOfBirth": 0,
                "d_CID": 1,
                "d_BrandID": 13,
                "d_BrandName": "AOLIV",
                "seminarId": "10050",
                "period": 2,
                "d_SKUsDecisions": [
                    131,
                    132
                ],
                "d_SalesForce": 35,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497c815830f3e43195a5557",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 13,
                        "d_SKUID": 131,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 8,
                        "d_TargetConsumerSegment": 4,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 46,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 10,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 15.602400111176573,
                        "d_FactoryPrice": [
                            11,
                            6.69768762588501,
                            6.69768762588501
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 1
                    },
                    {
                        "_id": "5497c815830f3e43195a5558",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 13,
                        "d_SKUID": 132,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 35,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 12.340080087930561,
                        "d_FactoryPrice": [
                            8.7,
                            7.61421346664429,
                            7.61421346664429
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 1
                    }
                ]
            }
        ],
        "SKUDecisions": null
    },
    {
        "_id": "5497c816830f3e43195a5578",
        "d_CID": 2,
        "d_CompanyName": "",
        "seminarId": "10050",
        "period": 2,
        "bs_BlockBudgetApplication": false,
        "bs_AdditionalBudgetApplicationCounter": 0,
        "d_InvestmentInServicing": 0,
        "d_InvestmentInTechnology": 190,
        "d_InvestmentInEfficiency": 0,
        "d_RequestedAdditionalBudget": 0,
        "d_IsAdditionalBudgetAccepted": false,
        "d_BrandsDecisions": [
            21,
            22,
            23
        ],
        "__v": 0,
        "brandDecisions": [
            {
                "_id": "5497c815830f3e43195a556e",
                "bs_PeriodOfBirth": 0,
                "d_CID": 2,
                "d_BrandID": 21,
                "d_BrandName": "BOBOB",
                "seminarId": "10050",
                "period": 2,
                "d_SKUsDecisions": [
                    211,
                    212,
                    213
                ],
                "d_SalesForce": 45,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497c815830f3e43195a5559",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 21,
                        "d_SKUID": 211,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 5,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 75,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 6,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 8.935920063673855,
                        "d_FactoryPrice": [
                            6.3,
                            6.34517765045166,
                            6.34517765045166
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 0
                    },
                    {
                        "_id": "5497c815830f3e43195a555a",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 21,
                        "d_SKUID": 212,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 5,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 160,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 4,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 14.6000003814697,
                        "d_FactoryPrice": [
                            10.293288230896,
                            10.293288230896,
                            10.293288230896
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 0
                    },
                    {
                        "_id": "5497c815830f3e43195a555b",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 21,
                        "d_SKUID": 213,
                        "d_SKUName": "_3",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 5,
                        "d_TargetConsumerSegment": 2,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 130,
                        "d_PackSize": 0,
                        "d_IngredientsQuality": 4,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 3.625,
                        "d_FactoryPrice": [
                            2.55569648742676,
                            2.55569648742676,
                            2.55569648742676
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 0
                    }
                ]
            },
            {
                "_id": "5497c815830f3e43195a556f",
                "bs_PeriodOfBirth": 0,
                "d_CID": 2,
                "d_BrandID": 22,
                "d_BrandName": "BSOFE",
                "seminarId": "10050",
                "period": 2,
                "d_SKUsDecisions": [
                    221
                ],
                "d_SalesForce": 45,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497c815830f3e43195a555c",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 22,
                        "d_SKUID": 221,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 10,
                        "d_TargetConsumerSegment": 5,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 50,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 12,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 16.311600116230053,
                        "d_FactoryPrice": [
                            11.5,
                            8.88324928283691,
                            8.88324928283691
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 1
                    }
                ]
            },
            {
                "_id": "5497c815830f3e43195a5570",
                "bs_PeriodOfBirth": 0,
                "d_CID": 2,
                "d_BrandID": 23,
                "d_BrandName": "BJUNE",
                "seminarId": "10050",
                "period": 2,
                "d_SKUsDecisions": [
                    231,
                    232
                ],
                "d_SalesForce": 45,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497c815830f3e43195a555d",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 23,
                        "d_SKUID": 231,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 8,
                        "d_TargetConsumerSegment": 4,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 100,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 8,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 24.82200017687182,
                        "d_FactoryPrice": [
                            17.5,
                            9.87027645111084,
                            9.87027645111084
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 1
                    },
                    {
                        "_id": "5497c815830f3e43195a555e",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 23,
                        "d_SKUID": 232,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 109,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 12.05640008590917,
                        "d_FactoryPrice": [
                            8.5,
                            5.32289934158325,
                            5.32289934158325
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 1
                    }
                ]
            }
        ],
        "SKUDecisions": null
    },
    {
        "_id": "5497c816830f3e43195a5579",
        "d_CID": 3,
        "d_CompanyName": "",
        "seminarId": "10050",
        "period": 2,
        "bs_BlockBudgetApplication": false,
        "bs_AdditionalBudgetApplicationCounter": 0,
        "d_InvestmentInServicing": 0,
        "d_InvestmentInTechnology": 200,
        "d_InvestmentInEfficiency": 300,
        "d_RequestedAdditionalBudget": 0,
        "d_IsAdditionalBudgetAccepted": false,
        "d_BrandsDecisions": [
            31,
            32,
            33
        ],
        "__v": 0,
        "brandDecisions": [
            {
                "_id": "5497c815830f3e43195a5571",
                "bs_PeriodOfBirth": 0,
                "d_CID": 3,
                "d_BrandID": 31,
                "d_BrandName": "CASAH",
                "seminarId": "10050",
                "period": 2,
                "d_SKUsDecisions": [
                    311,
                    312,
                    313
                ],
                "d_SalesForce": 100,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497c815830f3e43195a555f",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 31,
                        "d_SKUID": 311,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0.01,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 9,
                        "d_TargetConsumerSegment": 2,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            true,
                            true
                        ],
                        "d_PromotionalBudget": 5,
                        "d_ProductionVolume": 200,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 10,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 9.914616070647659,
                        "d_FactoryPrice": [
                            6.99,
                            6.55668354034424,
                            6.55668354034424
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 30,
                        "__v": 0
                    },
                    {
                        "_id": "5497c815830f3e43195a5560",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 31,
                        "d_SKUID": 312,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0.02,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 9,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            true,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 5,
                        "d_ProductionVolume": 100,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 10,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 15.588216111075502,
                        "d_FactoryPrice": [
                            10.99,
                            11.209813117981,
                            11.209813117981
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 30,
                        "__v": 0
                    },
                    {
                        "_id": "5497c815830f3e43195a5561",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 31,
                        "d_SKUID": 313,
                        "d_SKUName": "_3",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 9,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            true,
                            true,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 5,
                        "d_ProductionVolume": 200,
                        "d_PackSize": 0,
                        "d_IngredientsQuality": 10,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 4.241016030219814,
                        "d_FactoryPrice": [
                            2.99,
                            2.52044558525085,
                            2.52044558525085
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 10,
                        "__v": 2
                    }
                ]
            },
            {
                "_id": "5497c816830f3e43195a5572",
                "bs_PeriodOfBirth": 0,
                "d_CID": 3,
                "d_BrandID": 32,
                "d_BrandName": "CEEKE",
                "seminarId": "10050",
                "period": 2,
                "d_SKUsDecisions": [
                    321,
                    322
                ],
                "d_SalesForce": 0,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497c815830f3e43195a5562",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 32,
                        "d_SKUID": 321,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 8,
                        "d_TargetConsumerSegment": 2,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 30,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 6,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 11.34720008085569,
                        "d_FactoryPrice": [
                            8,
                            10.0817823410034,
                            10.0817823410034
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 10,
                        "__v": 1
                    },
                    {
                        "_id": "5497c815830f3e43195a5563",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 32,
                        "d_SKUID": 322,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 8,
                        "d_TargetConsumerSegment": 2,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 30,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 10,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 11.34720008085569,
                        "d_FactoryPrice": [
                            8,
                            11.7033281326294,
                            11.7033281326294
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 10,
                        "__v": 2
                    }
                ]
            },
            {
                "_id": "5497c816830f3e43195a5573",
                "bs_PeriodOfBirth": 0,
                "d_CID": 3,
                "d_BrandID": 33,
                "d_BrandName": "CCHIN",
                "seminarId": "10050",
                "period": 2,
                "d_SKUsDecisions": [
                    331
                ],
                "d_SalesForce": 0,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497c815830f3e43195a5564",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 33,
                        "d_SKUID": 331,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0.03,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 10,
                        "d_TargetConsumerSegment": 5,
                        "d_PromotionalEpisodes": [
                            true,
                            true,
                            true,
                            true,
                            true,
                            false,
                            false,
                            true,
                            true,
                            true,
                            true,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 20,
                        "d_ProductionVolume": 70,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 12,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 17.020800121283536,
                        "d_FactoryPrice": [
                            12,
                            8.24873065948486,
                            8.24873065948486
                        ],
                        "d_AdditionalTradeMargin": 0.02,
                        "d_Advertising": 30,
                        "__v": 2
                    }
                ]
            }
        ],
        "SKUDecisions": null
    },
    {
        "_id": "5497c816830f3e43195a557a",
        "d_CID": 4,
        "d_CompanyName": "",
        "seminarId": "10050",
        "period": 2,
        "bs_BlockBudgetApplication": false,
        "bs_AdditionalBudgetApplicationCounter": 0,
        "d_InvestmentInServicing": 0,
        "d_InvestmentInTechnology": 1000,
        "d_InvestmentInEfficiency": 1000,
        "d_RequestedAdditionalBudget": 0,
        "d_IsAdditionalBudgetAccepted": false,
        "d_BrandsDecisions": [
            41,
            42,
            43
        ],
        "__v": 0,
        "brandDecisions": [
            {
                "_id": "5497c816830f3e43195a5574",
                "bs_PeriodOfBirth": 0,
                "d_CID": 4,
                "d_BrandID": 41,
                "d_BrandName": "DOPOL",
                "seminarId": "10050",
                "period": 2,
                "d_SKUsDecisions": [
                    411,
                    412
                ],
                "d_SalesForce": 1,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497c815830f3e43195a5565",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 41,
                        "d_SKUID": 411,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0.01,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 10,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            true,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 100,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 11.403936081259967,
                        "d_FactoryPrice": [
                            8.04,
                            5.04089117050171,
                            5.04089117050171
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 10,
                        "__v": 3
                    },
                    {
                        "_id": "5497c815830f3e43195a5566",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 41,
                        "d_SKUID": 412,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0.01,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 10,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 200,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 21.48876015312046,
                        "d_FactoryPrice": [
                            15.15,
                            10.1522836685181,
                            10.1522836685181
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 10,
                        "__v": 3
                    }
                ]
            },
            {
                "_id": "5497c816830f3e43195a5575",
                "bs_PeriodOfBirth": 0,
                "d_CID": 4,
                "d_BrandID": 42,
                "d_BrandName": "DOOOP",
                "seminarId": "10050",
                "period": 2,
                "d_SKUsDecisions": [
                    421,
                    422
                ],
                "d_SalesForce": 1,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497c815830f3e43195a5567",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 42,
                        "d_SKUID": 421,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 10,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 1,
                        "d_ProductionVolume": 100,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 10.283400073275468,
                        "d_FactoryPrice": [
                            7.25,
                            5.25239706039429,
                            5.25239706039429
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 1,
                        "__v": 1
                    },
                    {
                        "_id": "5497c815830f3e43195a5568",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 42,
                        "d_SKUID": 422,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 10,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 1,
                        "d_ProductionVolume": 100,
                        "d_PackSize": 0,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 5.162976036789339,
                        "d_FactoryPrice": [
                            3.64,
                            2.64382410049438,
                            2.64382410049438
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 1,
                        "__v": 1
                    }
                ]
            },
            {
                "_id": "5497c816830f3e43195a5576",
                "bs_PeriodOfBirth": 0,
                "d_CID": 4,
                "d_BrandID": 43,
                "d_BrandName": "DOYAL",
                "seminarId": "10050",
                "period": 2,
                "d_SKUsDecisions": [
                    431,
                    432
                ],
                "d_SalesForce": 1,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497c815830f3e43195a5569",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 43,
                        "d_SKUID": 431,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 4,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 20,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 12.666312090255165,
                        "d_FactoryPrice": [
                            8.93,
                            7.931471824646,
                            7.931471824646
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 1,
                        "__v": 2
                    },
                    {
                        "_id": "5497c815830f3e43195a556a",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 43,
                        "d_SKUID": 432,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 2,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 4,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 100,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 18.212256129773383,
                        "d_FactoryPrice": [
                            12.84,
                            8.84799766540527,
                            8.84799766540527
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 1,
                        "__v": 3
                    }
                ]
            }
        ],
        "SKUDecisions": null
    }
];

var period3 = [
    {
        "_id": "5497f2f9b524f49e3b7e2993",
        "d_CID": 1,
        "d_CompanyName": "",
        "seminarId": "10050",
        "period": 3,
        "bs_BlockBudgetApplication": false,
        "bs_AdditionalBudgetApplicationCounter": 1,
        "d_InvestmentInServicing": 0,
        "d_InvestmentInTechnology": 0,
        "d_InvestmentInEfficiency": 0,
        "d_RequestedAdditionalBudget": 0,
        "d_IsAdditionalBudgetAccepted": false,
        "d_BrandsDecisions": [
            11,
            12,
            13
        ],
        "__v": 0,
        "brandDecisions": [
            {
                "_id": "5497f2f9b524f49e3b7e2987",
                "bs_PeriodOfBirth": 0,
                "d_CID": 1,
                "d_BrandID": 11,
                "d_BrandName": "APONE",
                "seminarId": "10050",
                "period": 3,
                "d_SKUsDecisions": [
                    111,
                    112,
                    113
                ],
                "d_SalesForce": 5,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497f2f9b524f49e3b7e296f",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 11,
                        "d_SKUID": 111,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 4,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 250,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 5,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 6.84999990463257,
                        "d_FactoryPrice": [
                            4.82938528060913,
                            4.82938528060913,
                            4.82938528060913
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 0
                    },
                    {
                        "_id": "5497f2f9b524f49e3b7e2970",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 11,
                        "d_SKUID": 112,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 4,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            true
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 220,
                        "d_PackSize": 0,
                        "d_IngredientsQuality": 4,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 3.262320023246011,
                        "d_FactoryPrice": [
                            2.3,
                            3.06683588027954,
                            3.06683588027954
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 0
                    },
                    {
                        "_id": "5497f2f9b524f49e3b7e2971",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 11,
                        "d_SKUID": 113,
                        "d_SKUName": "_3",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 4,
                        "d_TargetConsumerSegment": 2,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 180,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 5,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 7.19999980926514,
                        "d_FactoryPrice": [
                            5.07614183425903,
                            5.07614183425903,
                            5.07614183425903
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 0
                    }
                ]
            },
            {
                "_id": "5497f2f9b524f49e3b7e2988",
                "bs_PeriodOfBirth": 0,
                "d_CID": 1,
                "d_BrandID": 12,
                "d_BrandName": "ACOOP",
                "seminarId": "10050",
                "period": 3,
                "d_SKUsDecisions": [
                    121
                ],
                "d_SalesForce": 15,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497f2f9b524f49e3b7e2972",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 12,
                        "d_SKUID": 121,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 9,
                        "d_TargetConsumerSegment": 5,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 100,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 11,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 34.04160024256707,
                        "d_FactoryPrice": [
                            24,
                            17.6254940032959,
                            17.6254940032959
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 1
                    }
                ]
            },
            {
                "_id": "5497f2f9b524f49e3b7e2989",
                "bs_PeriodOfBirth": 0,
                "d_CID": 1,
                "d_BrandID": 13,
                "d_BrandName": "AOLIV",
                "seminarId": "10050",
                "period": 3,
                "d_SKUsDecisions": [
                    131,
                    132
                ],
                "d_SalesForce": 5,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497f2f9b524f49e3b7e2973",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 13,
                        "d_SKUID": 131,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 8,
                        "d_TargetConsumerSegment": 4,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 50,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 10,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 17.020800121283536,
                        "d_FactoryPrice": [
                            12,
                            6.69768762588501,
                            6.69768762588501
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 2
                    },
                    {
                        "_id": "5497f2f9b524f49e3b7e2974",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 13,
                        "d_SKUID": 132,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 40,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 13.47480009601613,
                        "d_FactoryPrice": [
                            9.5,
                            7.61421346664429,
                            7.61421346664429
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 2
                    }
                ]
            }
        ],
        "SKUDecisions": null
    },
    {
        "_id": "5497f2f9b524f49e3b7e2994",
        "d_CID": 2,
        "d_CompanyName": "",
        "seminarId": "10050",
        "period": 3,
        "bs_BlockBudgetApplication": false,
        "bs_AdditionalBudgetApplicationCounter": 0,
        "d_InvestmentInServicing": 0,
        "d_InvestmentInTechnology": 0,
        "d_InvestmentInEfficiency": 0,
        "d_RequestedAdditionalBudget": 0,
        "d_IsAdditionalBudgetAccepted": false,
        "d_BrandsDecisions": [
            21,
            22,
            23
        ],
        "__v": 0,
        "brandDecisions": [
            {
                "_id": "5497f2f9b524f49e3b7e298a",
                "bs_PeriodOfBirth": 0,
                "d_CID": 2,
                "d_BrandID": 21,
                "d_BrandName": "BOBOB",
                "seminarId": "10050",
                "period": 3,
                "d_SKUsDecisions": [
                    211,
                    212,
                    213
                ],
                "d_SalesForce": 20,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497f2f9b524f49e3b7e2975",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 21,
                        "d_SKUID": 211,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 5,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 100,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 6,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 8.79408006266316,
                        "d_FactoryPrice": [
                            6.2,
                            6.34517765045166,
                            6.34517765045166
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 1
                    },
                    {
                        "_id": "5497f2f9b524f49e3b7e2976",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 21,
                        "d_SKUID": 212,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 5,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 250,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 4,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 14.325840102080306,
                        "d_FactoryPrice": [
                            10.1,
                            10.293288230896,
                            10.293288230896
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 1
                    },
                    {
                        "_id": "5497f2f9b524f49e3b7e2977",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 21,
                        "d_SKUID": 213,
                        "d_SKUName": "_3",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 5,
                        "d_TargetConsumerSegment": 2,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 100,
                        "d_PackSize": 0,
                        "d_IngredientsQuality": 4,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 3.625,
                        "d_FactoryPrice": [
                            2.55569648742676,
                            2.55569648742676,
                            2.55569648742676
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 0
                    }
                ]
            },
            {
                "_id": "5497f2f9b524f49e3b7e298b",
                "bs_PeriodOfBirth": 0,
                "d_CID": 2,
                "d_BrandID": 22,
                "d_BrandName": "BSOFE",
                "seminarId": "10050",
                "period": 3,
                "d_SKUsDecisions": [
                    221
                ],
                "d_SalesForce": 20,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497f2f9b524f49e3b7e2978",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 22,
                        "d_SKUID": 221,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 10,
                        "d_TargetConsumerSegment": 5,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 100,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 12,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 19.857600141497457,
                        "d_FactoryPrice": [
                            14,
                            8.88324928283691,
                            8.88324928283691
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 1
                    }
                ]
            },
            {
                "_id": "5497f2f9b524f49e3b7e298c",
                "bs_PeriodOfBirth": 0,
                "d_CID": 2,
                "d_BrandID": 23,
                "d_BrandName": "BJUNE",
                "seminarId": "10050",
                "period": 3,
                "d_SKUsDecisions": [
                    231,
                    232
                ],
                "d_SalesForce": 25,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497f2f9b524f49e3b7e2979",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 23,
                        "d_SKUID": 231,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0.01,
                        "d_WholesalesBonusMinVolume": 10,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 8,
                        "d_TargetConsumerSegment": 4,
                        "d_PromotionalEpisodes": [
                            true,
                            false,
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            true,
                            false,
                            true,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 10,
                        "d_ProductionVolume": 1,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 8,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 24.963840177882517,
                        "d_FactoryPrice": [
                            17.6,
                            9.87027645111084,
                            9.87027645111084
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 15,
                        "__v": 6
                    },
                    {
                        "_id": "5497f2f9b524f49e3b7e297a",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 23,
                        "d_SKUID": 232,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 5,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 5,
                        "d_ProductionVolume": 65,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 12.05640008590917,
                        "d_FactoryPrice": [
                            8.5,
                            5.32289934158325,
                            5.32289934158325
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 10,
                        "__v": 4
                    }
                ]
            }
        ],
        "SKUDecisions": null
    },
    {
        "_id": "5497f2f9b524f49e3b7e2995",
        "d_CID": 3,
        "d_CompanyName": "",
        "seminarId": "10050",
        "period": 3,
        "bs_BlockBudgetApplication": false,
        "bs_AdditionalBudgetApplicationCounter": 0,
        "d_InvestmentInServicing": 0,
        "d_InvestmentInTechnology": 0,
        "d_InvestmentInEfficiency": 0,
        "d_RequestedAdditionalBudget": 0,
        "d_IsAdditionalBudgetAccepted": false,
        "d_BrandsDecisions": [
            31,
            32,
            33
        ],
        "__v": 0,
        "brandDecisions": [
            {
                "_id": "5497f2f9b524f49e3b7e298d",
                "bs_PeriodOfBirth": 0,
                "d_CID": 3,
                "d_BrandID": 31,
                "d_BrandName": "CASAH",
                "seminarId": "10050",
                "period": 3,
                "d_SKUsDecisions": [
                    311,
                    312,
                    313
                ],
                "d_SalesForce": 0,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497f2f9b524f49e3b7e297b",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 31,
                        "d_SKUID": 311,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 6,
                        "d_TargetConsumerSegment": 2,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            true,
                            true
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 0,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 8,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 9.914616070647659,
                        "d_FactoryPrice": [
                            6.99,
                            6.55668354034424,
                            6.55668354034424
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 0,
                        "__v": 0
                    },
                    {
                        "_id": "5497f2f9b524f49e3b7e297c",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 31,
                        "d_SKUID": 312,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 6,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            true,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 0,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 8,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 15.588216111075502,
                        "d_FactoryPrice": [
                            10.99,
                            11.209813117981,
                            11.209813117981
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 0,
                        "__v": 0
                    },
                    {
                        "_id": "5497f2f9b524f49e3b7e297d",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 31,
                        "d_SKUID": 313,
                        "d_SKUName": "_3",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 6,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            true,
                            true,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 0,
                        "d_PackSize": 0,
                        "d_IngredientsQuality": 8,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 3.4041600242567065,
                        "d_FactoryPrice": [
                            2.4,
                            2.52044558525085,
                            2.52044558525085
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 0,
                        "__v": 0
                    }
                ]
            },
            {
                "_id": "5497f2f9b524f49e3b7e298e",
                "bs_PeriodOfBirth": 0,
                "d_CID": 3,
                "d_BrandID": 32,
                "d_BrandName": "CEEKE",
                "seminarId": "10050",
                "period": 3,
                "d_SKUsDecisions": [
                    321,
                    322
                ],
                "d_SalesForce": 0,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497f2f9b524f49e3b7e297e",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 32,
                        "d_SKUID": 321,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 8,
                        "d_TargetConsumerSegment": 4,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 0,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 6,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 12.76560009096265,
                        "d_FactoryPrice": [
                            9,
                            10.0817823410034,
                            10.0817823410034
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 0,
                        "__v": 0
                    },
                    {
                        "_id": "5497f2f9b524f49e3b7e297f",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 32,
                        "d_SKUID": 322,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 8,
                        "d_TargetConsumerSegment": 4,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 0,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 10,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 14.184000101069612,
                        "d_FactoryPrice": [
                            10,
                            11.7033281326294,
                            11.7033281326294
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 0,
                        "__v": 0
                    }
                ]
            },
            {
                "_id": "5497f2f9b524f49e3b7e298f",
                "bs_PeriodOfBirth": 0,
                "d_CID": 3,
                "d_BrandID": 33,
                "d_BrandName": "CCHIN",
                "seminarId": "10050",
                "period": 3,
                "d_SKUsDecisions": [
                    331
                ],
                "d_SalesForce": 0,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497f2f9b524f49e3b7e2980",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 33,
                        "d_SKUID": 331,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 10,
                        "d_TargetConsumerSegment": 5,
                        "d_PromotionalEpisodes": [
                            true,
                            true,
                            true,
                            true,
                            true,
                            false,
                            false,
                            true,
                            true,
                            true,
                            true,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 0,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 12,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 18.425016131289425,
                        "d_FactoryPrice": [
                            12.99,
                            8.24873065948486,
                            8.24873065948486
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 0,
                        "__v": 0
                    }
                ]
            }
        ],
        "SKUDecisions": null
    },
    {
        "_id": "5497f2f9b524f49e3b7e2996",
        "d_CID": 4,
        "d_CompanyName": "",
        "seminarId": "10050",
        "period": 3,
        "bs_BlockBudgetApplication": false,
        "bs_AdditionalBudgetApplicationCounter": 0,
        "d_InvestmentInServicing": 0,
        "d_InvestmentInTechnology": 0,
        "d_InvestmentInEfficiency": 0,
        "d_RequestedAdditionalBudget": 0,
        "d_IsAdditionalBudgetAccepted": false,
        "d_BrandsDecisions": [
            41,
            42,
            43
        ],
        "__v": 0,
        "brandDecisions": [
            {
                "_id": "5497f2f9b524f49e3b7e2990",
                "bs_PeriodOfBirth": 0,
                "d_CID": 4,
                "d_BrandID": 41,
                "d_BrandName": "DOPOL",
                "seminarId": "10050",
                "period": 3,
                "d_SKUsDecisions": [
                    411,
                    412
                ],
                "d_SalesForce": 0,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497f2f9b524f49e3b7e2981",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 41,
                        "d_SKUID": 411,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 5,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            true,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 0,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 5,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 11.403936081259967,
                        "d_FactoryPrice": [
                            8.04,
                            5.04089117050171,
                            5.04089117050171
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 0,
                        "__v": 0
                    },
                    {
                        "_id": "5497f2f9b524f49e3b7e2982",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 41,
                        "d_SKUID": 412,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 5,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 0,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 5,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 21.48876015312046,
                        "d_FactoryPrice": [
                            15.15,
                            10.1522836685181,
                            10.1522836685181
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 0,
                        "__v": 0
                    }
                ]
            },
            {
                "_id": "5497f2f9b524f49e3b7e2991",
                "bs_PeriodOfBirth": 0,
                "d_CID": 4,
                "d_BrandID": 42,
                "d_BrandName": "DOOOP",
                "seminarId": "10050",
                "period": 3,
                "d_SKUsDecisions": [
                    421,
                    422
                ],
                "d_SalesForce": 0,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497f2f9b524f49e3b7e2983",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 42,
                        "d_SKUID": 421,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 5,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 0,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 4,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 10.283400073275468,
                        "d_FactoryPrice": [
                            7.25,
                            5.25239706039429,
                            5.25239706039429
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 0,
                        "__v": 0
                    },
                    {
                        "_id": "5497f2f9b524f49e3b7e2984",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 42,
                        "d_SKUID": 422,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 5,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 0,
                        "d_PackSize": 0,
                        "d_IngredientsQuality": 5,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 5.162976036789339,
                        "d_FactoryPrice": [
                            3.64,
                            2.64382410049438,
                            2.64382410049438
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 0,
                        "__v": 0
                    }
                ]
            },
            {
                "_id": "5497f2f9b524f49e3b7e2992",
                "bs_PeriodOfBirth": 0,
                "d_CID": 4,
                "d_BrandID": 43,
                "d_BrandName": "DOYAL",
                "seminarId": "10050",
                "period": 3,
                "d_SKUsDecisions": [
                    431,
                    432
                ],
                "d_SalesForce": 0,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5497f2f9b524f49e3b7e2985",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 43,
                        "d_SKUID": 431,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 6,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 0,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 12.666312090255165,
                        "d_FactoryPrice": [
                            8.93,
                            7.931471824646,
                            7.931471824646
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 0,
                        "__v": 0
                    },
                    {
                        "_id": "5497f2f9b524f49e3b7e2986",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 43,
                        "d_SKUID": 432,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 3,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 5,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 0,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 18.212256129773383,
                        "d_FactoryPrice": [
                            12.84,
                            8.84799766540527,
                            8.84799766540527
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 0,
                        "__v": 0
                    }
                ]
            }
        ],
        "SKUDecisions": null
    },
];

var period4 = [
    {
        "_id": "5498df175e98c2f3409cd0ca",
        "d_CID": 1,
        "d_CompanyName": "",
        "seminarId": "10050",
        "period": 4,
        "bs_BlockBudgetApplication": false,
        "bs_AdditionalBudgetApplicationCounter": 1,
        "d_InvestmentInServicing": 0,
        "d_InvestmentInTechnology": 0,
        "d_InvestmentInEfficiency": 0,
        "d_RequestedAdditionalBudget": 0,
        "d_IsAdditionalBudgetAccepted": false,
        "d_BrandsDecisions": [
            11,
            12,
            13
        ],
        "__v": 0,
        "brandDecisions": [
            {
                "_id": "5498df175e98c2f3409cd0be",
                "bs_PeriodOfBirth": 0,
                "d_CID": 1,
                "d_BrandID": 11,
                "d_BrandName": "APONE",
                "seminarId": "10050",
                "period": 4,
                "d_SKUsDecisions": [
                    111,
                    112,
                    113
                ],
                "d_SalesForce": 5,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5498df175e98c2f3409cd0a6",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 11,
                        "d_SKUID": 111,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 4,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 300,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 5,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 6.84999990463257,
                        "d_FactoryPrice": [
                            4.82938528060913,
                            4.82938528060913,
                            4.82938528060913
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 0
                    },
                    {
                        "_id": "5498df175e98c2f3409cd0a7",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 11,
                        "d_SKUID": 112,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 4,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            true
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 260,
                        "d_PackSize": 0,
                        "d_IngredientsQuality": 4,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 3.262320023246011,
                        "d_FactoryPrice": [
                            2.3,
                            3.06683588027954,
                            3.06683588027954
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 0
                    },
                    {
                        "_id": "5498df175e98c2f3409cd0a8",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 11,
                        "d_SKUID": 113,
                        "d_SKUName": "_3",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 4,
                        "d_TargetConsumerSegment": 2,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 280,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 5,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 7.19999980926514,
                        "d_FactoryPrice": [
                            5.07614183425903,
                            5.07614183425903,
                            5.07614183425903
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 0
                    }
                ]
            },
            {
                "_id": "5498df175e98c2f3409cd0bf",
                "bs_PeriodOfBirth": 0,
                "d_CID": 1,
                "d_BrandID": 12,
                "d_BrandName": "ACOOP",
                "seminarId": "10050",
                "period": 4,
                "d_SKUsDecisions": [
                    121
                ],
                "d_SalesForce": 5,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5498df175e98c2f3409cd0a9",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 12,
                        "d_SKUID": 121,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 9,
                        "d_TargetConsumerSegment": 5,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 210,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 11,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 34.04160024256707,
                        "d_FactoryPrice": [
                            24,
                            17.6254940032959,
                            17.6254940032959
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 0
                    }
                ]
            },
            {
                "_id": "5498df175e98c2f3409cd0c0",
                "bs_PeriodOfBirth": 0,
                "d_CID": 1,
                "d_BrandID": 13,
                "d_BrandName": "AOLIV",
                "seminarId": "10050",
                "period": 4,
                "d_SKUsDecisions": [
                    131,
                    132
                ],
                "d_SalesForce": 5,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5498df175e98c2f3409cd0aa",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 13,
                        "d_SKUID": 131,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 8,
                        "d_TargetConsumerSegment": 4,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 60,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 10,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 17.020800121283536,
                        "d_FactoryPrice": [
                            12,
                            6.69768762588501,
                            6.69768762588501
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 0
                    },
                    {
                        "_id": "5498df175e98c2f3409cd0ab",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 1,
                        "d_BrandID": 13,
                        "d_SKUID": 132,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 58,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 13.47480009601613,
                        "d_FactoryPrice": [
                            9.5,
                            7.61421346664429,
                            7.61421346664429
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 0
                    }
                ]
            }
        ],
        "SKUDecisions": null
    },
    {
        "_id": "5498df175e98c2f3409cd0cb",
        "d_CID": 2,
        "d_CompanyName": "",
        "seminarId": "10050",
        "period": 4,
        "bs_BlockBudgetApplication": false,
        "bs_AdditionalBudgetApplicationCounter": 0,
        "d_InvestmentInServicing": 0,
        "d_InvestmentInTechnology": 0,
        "d_InvestmentInEfficiency": 0,
        "d_RequestedAdditionalBudget": 0,
        "d_IsAdditionalBudgetAccepted": false,
        "d_BrandsDecisions": [
            21,
            22,
            23
        ],
        "__v": 0,
        "brandDecisions": [
            {
                "_id": "5498df175e98c2f3409cd0c1",
                "bs_PeriodOfBirth": 0,
                "d_CID": 2,
                "d_BrandID": 21,
                "d_BrandName": "BOBOB",
                "seminarId": "10050",
                "period": 4,
                "d_SKUsDecisions": [
                    211,
                    212,
                    213
                ],
                "d_SalesForce": 15,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5498df175e98c2f3409cd0ac",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 21,
                        "d_SKUID": 211,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 5,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 120,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 6,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 8.79408006266316,
                        "d_FactoryPrice": [
                            6.2,
                            6.34517765045166,
                            6.34517765045166
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 0
                    },
                    {
                        "_id": "5498df175e98c2f3409cd0ad",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 21,
                        "d_SKUID": 212,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 5,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 300,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 4,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 14.325840102080306,
                        "d_FactoryPrice": [
                            10.1,
                            10.293288230896,
                            10.293288230896
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 0
                    },
                    {
                        "_id": "5498df175e98c2f3409cd0ae",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 21,
                        "d_SKUID": 213,
                        "d_SKUName": "_3",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 5,
                        "d_TargetConsumerSegment": 2,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 180,
                        "d_PackSize": 0,
                        "d_IngredientsQuality": 4,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 3.625,
                        "d_FactoryPrice": [
                            2.55569648742676,
                            2.55569648742676,
                            2.55569648742676
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 0
                    }
                ]
            },
            {
                "_id": "5498df175e98c2f3409cd0c2",
                "bs_PeriodOfBirth": 0,
                "d_CID": 2,
                "d_BrandID": 22,
                "d_BrandName": "BSOFE",
                "seminarId": "10050",
                "period": 4,
                "d_SKUsDecisions": [
                    221
                ],
                "d_SalesForce": 15,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5498df175e98c2f3409cd0af",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 22,
                        "d_SKUID": 221,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 10,
                        "d_TargetConsumerSegment": 5,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 110,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 12,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 19.857600141497457,
                        "d_FactoryPrice": [
                            14,
                            8.88324928283691,
                            8.88324928283691
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 0
                    }
                ]
            },
            {
                "_id": "5498df175e98c2f3409cd0c3",
                "bs_PeriodOfBirth": 0,
                "d_CID": 2,
                "d_BrandID": 23,
                "d_BrandName": "BJUNE",
                "seminarId": "10050",
                "period": 4,
                "d_SKUsDecisions": [
                    231,
                    232
                ],
                "d_SalesForce": 15,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5498df175e98c2f3409cd0b0",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 23,
                        "d_SKUID": 231,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 8,
                        "d_TargetConsumerSegment": 4,
                        "d_PromotionalEpisodes": [
                            true,
                            false,
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            true,
                            false,
                            true,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 90,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 8,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 24.963840177882517,
                        "d_FactoryPrice": [
                            17.6,
                            9.87027645111084,
                            9.87027645111084
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 0
                    },
                    {
                        "_id": "5498df175e98c2f3409cd0b1",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 2,
                        "d_BrandID": 23,
                        "d_SKUID": 232,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 2,
                        "d_ProductionVolume": 109,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": true,
                        "d_ConsumerPrice": 12.05640008590917,
                        "d_FactoryPrice": [
                            8.5,
                            5.32289934158325,
                            5.32289934158325
                        ],
                        "d_AdditionalTradeMargin": 0,
                        "d_Advertising": 5,
                        "__v": 0
                    }
                ]
            }
        ],
        "SKUDecisions": null
    },
    {
        "_id": "5498df175e98c2f3409cd0cc",
        "d_CID": 3,
        "d_CompanyName": "",
        "seminarId": "10050",
        "period": 4,
        "bs_BlockBudgetApplication": false,
        "bs_AdditionalBudgetApplicationCounter": 0,
        "d_InvestmentInServicing": 0,
        "d_InvestmentInTechnology": 0,
        "d_InvestmentInEfficiency": 0,
        "d_RequestedAdditionalBudget": 0,
        "d_IsAdditionalBudgetAccepted": false,
        "d_BrandsDecisions": [
            31,
            32,
            33
        ],
        "__v": 0,
        "brandDecisions": [
            {
                "_id": "5498df175e98c2f3409cd0c4",
                "bs_PeriodOfBirth": 0,
                "d_CID": 3,
                "d_BrandID": 31,
                "d_BrandName": "CASAH",
                "seminarId": "10050",
                "period": 4,
                "d_SKUsDecisions": [
                    311,
                    312,
                    313
                ],
                "d_SalesForce": 0,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5498df175e98c2f3409cd0b2",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 31,
                        "d_SKUID": 311,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0.02,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 10,
                        "d_TargetConsumerSegment": 2,
                        "d_PromotionalEpisodes": [
                            true,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            true,
                            true,
                            true
                        ],
                        "d_PromotionalBudget": 40,
                        "d_ProductionVolume": 150,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 10,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 8.496216060540698,
                        "d_FactoryPrice": [
                            5.99,
                            6.55668354034424,
                            6.55668354034424
                        ],
                        "d_AdditionalTradeMargin": 0.03,
                        "d_Advertising": 0,
                        "__v": 4
                    },
                    {
                        "_id": "5498df175e98c2f3409cd0b3",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 31,
                        "d_SKUID": 312,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0.02,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 10,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            true,
                            true,
                            true,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 60,
                        "d_ProductionVolume": 80,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 10,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 14.169816100968541,
                        "d_FactoryPrice": [
                            9.99,
                            11.209813117981,
                            11.209813117981
                        ],
                        "d_AdditionalTradeMargin": 0.03,
                        "d_Advertising": 0,
                        "__v": 2
                    },
                    {
                        "_id": "5498df175e98c2f3409cd0b4",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 31,
                        "d_SKUID": 313,
                        "d_SKUName": "_3",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0.01,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 10,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            true,
                            true,
                            true,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 20,
                        "d_ProductionVolume": 220,
                        "d_PackSize": 0,
                        "d_IngredientsQuality": 10,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 2.8368000202139223,
                        "d_FactoryPrice": [
                            2,
                            2.52044558525085,
                            2.52044558525085
                        ],
                        "d_AdditionalTradeMargin": 0.03,
                        "d_Advertising": 0,
                        "__v": 2
                    }
                ]
            },
            {
                "_id": "5498df175e98c2f3409cd0c5",
                "bs_PeriodOfBirth": 0,
                "d_CID": 3,
                "d_BrandID": 32,
                "d_BrandName": "CEEKE",
                "seminarId": "10050",
                "period": 4,
                "d_SKUsDecisions": [
                    321,
                    322
                ],
                "d_SalesForce": 0,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5498df175e98c2f3409cd0b5",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 32,
                        "d_SKUID": 321,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 8,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            true,
                            true,
                            true,
                            true,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 20,
                        "d_ProductionVolume": 30,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 8,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 12.76560009096265,
                        "d_FactoryPrice": [
                            9,
                            10.0817823410034,
                            10.0817823410034
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 10,
                        "__v": 6
                    },
                    {
                        "_id": "5498df175e98c2f3409cd0b6",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 32,
                        "d_SKUID": 322,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 8,
                        "d_TargetConsumerSegment": 1,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            true,
                            true,
                            true,
                            true,
                            true,
                            true
                        ],
                        "d_PromotionalBudget": 20,
                        "d_ProductionVolume": 30,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 10,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 14.184000101069612,
                        "d_FactoryPrice": [
                            10,
                            11.7033281326294,
                            11.7033281326294
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 10,
                        "__v": 6
                    }
                ]
            },
            {
                "_id": "5498df175e98c2f3409cd0c6",
                "bs_PeriodOfBirth": 0,
                "d_CID": 3,
                "d_BrandID": 33,
                "d_BrandName": "CCHIN",
                "seminarId": "10050",
                "period": 4,
                "d_SKUsDecisions": [
                    331
                ],
                "d_SalesForce": 0,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5498df175e98c2f3409cd0b7",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 3,
                        "d_BrandID": 33,
                        "d_SKUID": 331,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0.03,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 0,
                        "d_ToDrop": false,
                        "d_Technology": 13,
                        "d_TargetConsumerSegment": 5,
                        "d_PromotionalEpisodes": [
                            true,
                            true,
                            true,
                            true,
                            true,
                            true,
                            true,
                            true,
                            true,
                            true,
                            true,
                            true,
                            true
                        ],
                        "d_PromotionalBudget": 40,
                        "d_ProductionVolume": 60,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 13,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 18.425016131289425,
                        "d_FactoryPrice": [
                            12.99,
                            8.24873065948486,
                            8.24873065948486
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 20,
                        "__v": 14
                    }
                ]
            }
        ],
        "SKUDecisions": null
    },
    {
        "_id": "5498df175e98c2f3409cd0cd",
        "d_CID": 4,
        "d_CompanyName": "",
        "seminarId": "10050",
        "period": 4,
        "bs_BlockBudgetApplication": false,
        "bs_AdditionalBudgetApplicationCounter": 0,
        "d_InvestmentInServicing": 0,
        "d_InvestmentInTechnology": 190,
        "d_InvestmentInEfficiency": 0,
        "d_RequestedAdditionalBudget": 0,
        "d_IsAdditionalBudgetAccepted": false,
        "d_BrandsDecisions": [
            41,
            42,
            43
        ],
        "__v": 0,
        "brandDecisions": [
            {
                "_id": "5498df175e98c2f3409cd0c7",
                "bs_PeriodOfBirth": 0,
                "d_CID": 4,
                "d_BrandID": 41,
                "d_BrandName": "DOPOL",
                "seminarId": "10050",
                "period": 4,
                "d_SKUsDecisions": [
                    411,
                    412
                ],
                "d_SalesForce": 0,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5498df175e98c2f3409cd0b8",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 41,
                        "d_SKUID": 411,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            true,
                            false,
                            false,
                            false,
                            true,
                            false,
                            false,
                            false,
                            true,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 200,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 11.403936081259967,
                        "d_FactoryPrice": [
                            8.04,
                            5.04089117050171,
                            5.04089117050171
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 10,
                        "__v": 1
                    },
                    {
                        "_id": "5498df175e98c2f3409cd0b9",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 41,
                        "d_SKUID": 412,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 100,
                        "d_PackSize": 2,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 21.48876015312046,
                        "d_FactoryPrice": [
                            15.15,
                            10.1522836685181,
                            10.1522836685181
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 10,
                        "__v": 1
                    }
                ]
            },
            {
                "_id": "5498df175e98c2f3409cd0c8",
                "bs_PeriodOfBirth": 0,
                "d_CID": 4,
                "d_BrandID": 42,
                "d_BrandName": "DOOOP",
                "seminarId": "10050",
                "period": 4,
                "d_SKUsDecisions": [
                    421,
                    422
                ],
                "d_SalesForce": 0,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5498df175e98c2f3409cd0ba",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 42,
                        "d_SKUID": 421,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            true,
                            false,
                            true,
                            false,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 200,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 14.538600103596352,
                        "d_FactoryPrice": [
                            10.25,
                            5.25239706039429,
                            5.25239706039429
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 10,
                        "__v": 4
                    },
                    {
                        "_id": "5498df175e98c2f3409cd0bb",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 42,
                        "d_SKUID": 422,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 3,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            true,
                            false,
                            true,
                            false,
                            true,
                            false,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 100,
                        "d_PackSize": 0,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 7.9997760570032606,
                        "d_FactoryPrice": [
                            5.64,
                            2.64382410049438,
                            2.64382410049438
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 10,
                        "__v": 4
                    }
                ]
            },
            {
                "_id": "5498df175e98c2f3409cd0c9",
                "bs_PeriodOfBirth": 0,
                "d_CID": 4,
                "d_BrandID": 43,
                "d_BrandName": "DOYAL",
                "seminarId": "10050",
                "period": 4,
                "d_SKUsDecisions": [
                    431,
                    432
                ],
                "d_SalesForce": 0,
                "__v": 0,
                "SKUDecisions": [
                    {
                        "_id": "5498df175e98c2f3409cd0bc",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 43,
                        "d_SKUID": 431,
                        "d_SKUName": "_1",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 6,
                        "d_PromotionalEpisodes": [
                            false,
                            true,
                            false,
                            false,
                            false,
                            true,
                            false,
                            false,
                            false,
                            false,
                            true,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 50,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 15.503112110469086,
                        "d_FactoryPrice": [
                            10.93,
                            7.931471824646,
                            7.931471824646
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 10,
                        "__v": 3
                    },
                    {
                        "_id": "5498df175e98c2f3409cd0bd",
                        "bs_PeriodOfBirth": 0,
                        "d_CID": 4,
                        "d_BrandID": 43,
                        "d_SKUID": 432,
                        "d_SKUName": "_2",
                        "seminarId": "10050",
                        "period": 4,
                        "d_WarrantyLength": 0,
                        "d_WholesalesBonusRate": 0,
                        "d_WholesalesBonusMinVolume": 0,
                        "d_TradeExpenses": 1,
                        "d_ToDrop": false,
                        "d_Technology": 7,
                        "d_TargetConsumerSegment": 5,
                        "d_PromotionalEpisodes": [
                            false,
                            false,
                            true,
                            false,
                            false,
                            false,
                            false,
                            true,
                            false,
                            false,
                            true,
                            false,
                            false
                        ],
                        "d_PromotionalBudget": 0,
                        "d_ProductionVolume": 100,
                        "d_PackSize": 1,
                        "d_IngredientsQuality": 9,
                        "d_RepriceFactoryStocks": false,
                        "d_ConsumerPrice": 16.79385611966642,
                        "d_FactoryPrice": [
                            11.84,
                            8.84799766540527,
                            8.84799766540527
                        ],
                        "d_AdditionalTradeMargin": 0.01,
                        "d_Advertising": 10,
                        "__v": 3
                    }
                ]
            }
        ],
        "SKUDecisions": null
    }
];


var seminarFinalResult = [
    {
        "period": 0,
        "seminarId": 10052,
        "scores": [
            {
                "companyId": 1,
                "originalSOM": 0,
                "originalProfit": 0,
                "originalBudget": 0,
                "scaledSOM": 50,
                "scaledProfit": 50,
                "scaledBudget": 0,
                "finalScore": 50
            },
            {
                "companyId": 2,
                "originalSOM": 0,
                "originalProfit": 0,
                "originalBudget": 0,
                "scaledSOM": 50,
                "scaledProfit": 50,
                "scaledBudget": 0,
                "finalScore": 50
            },
            {
                "companyId": 3,
                "originalSOM": 0,
                "originalProfit": 0,
                "originalBudget": 0,
                "scaledSOM": 50,
                "scaledProfit": 50,
                "scaledBudget": 0,
                "finalScore": 50
            },
            {
                "companyId": 4,
                "originalSOM": 0,
                "originalProfit": 0,
                "originalBudget": 0,
                "scaledSOM": 50,
                "scaledProfit": 50,
                "scaledBudget": 0,
                "finalScore": 50
            }
        ]
    },
    {
        "period": 1,
        "seminarId": 10052,
        "scores": [
            {
                "companyId": 1,
                "originalSOM": 6.813542544841803,
                "originalProfit": 498.022613525391,
                "originalBudget": 84.55503138100232,
                "scaledSOM": 100,
                "scaledProfit": 100,
                "scaledBudget": 0,
                "finalScore": 100
            },
            {
                "companyId": 2,
                "originalSOM": 4.837550222873702,
                "originalProfit": 36.3861846923828,
                "originalBudget": 105.2393769054878,
                "scaledSOM": 91.79337616078331,
                "scaledProfit": 33.52662239239609,
                "scaledBudget": -5.239376905487802,
                "finalScore": 52.1812454656141
            },
            {
                "companyId": 3,
                "originalSOM": 5.613383650779702,
                "originalProfit": 162.171585083008,
                "originalBudget": 116.91183694979036,
                "scaledSOM": 95.01554106189641,
                "scaledProfit": 51.639102031030305,
                "scaledBudget": -16.911836949790356,
                "finalScore": 39.503647646882655
            },
            {
                "companyId": 4,
                "originalSOM": -17.26447492837903,
                "originalProfit": -196.445526123047,
                "originalBudget": 0,
                "scaledSOM": 1.0658141036401503e-14,
                "scaledProfit": 0,
                "scaledBudget": 0,
                "finalScore": 5.329070518200751e-15
            }
        ]
    },
    {
        "period": 2,
        "seminarId": 10052,
        "scores": [
            {
                "companyId": 1,
                "originalSOM": 11.349548399448404,
                "originalProfit": 1709.24426269531,
                "originalBudget": 75.4278564453128,
                "scaledSOM": 100,
                "scaledProfit": 100,
                "scaledBudget": 0,
                "finalScore": 100
            },
            {
                "companyId": 2,
                "originalSOM": 7.1705296635627995,
                "originalProfit": 996.342834472656,
                "originalBudget": 85.1814604968561,
                "scaledSOM": 87.2105338985721,
                "scaledProfit": 81.77734272189524,
                "scaledBudget": 0,
                "finalScore": 84.49393831023366
            },
            {
                "companyId": 3,
                "originalSOM": 2.805852890014698,
                "originalProfit": -379.158325195313,
                "originalBudget": 110.06192091034696,
                "scaledSOM": 73.85288006475803,
                "scaledProfit": 46.617802810808556,
                "scaledBudget": -10.061920910346956,
                "finalScore": 40.11149961708938
            },
            {
                "companyId": 4,
                "originalSOM": -21.325926110148412,
                "originalProfit": -2202.92626953125,
                "originalBudget": 126.24315215320122,
                "scaledSOM": 7.105427357601002e-15,
                "scaledProfit": 0,
                "scaledBudget": -26.243152153201223,
                "finalScore": -52.486304306402445
            }
        ]
    },
    {
        "period": 3,
        "seminarId": 10052,
        "scores": [
            {
                "companyId": 1,
                "originalSOM": 13.366477191448203,
                "originalProfit": 3987.3359375,
                "originalBudget": 52.846213239964634,
                "scaledSOM": 72.1220757361257,
                "scaledProfit": 100,
                "scaledBudget": 0,
                "finalScore": 86.06103786806284
            },
            {
                "companyId": 2,
                "originalSOM": 27.0184680819511,
                "originalProfit": 3347.95068359375,
                "originalBudget": 63.596583420668296,
                "scaledSOM": 100,
                "scaledProfit": 89.53195200015222,
                "scaledBudget": 0,
                "finalScore": 94.76597600007611
            },
            {
                "companyId": 3,
                "originalSOM": -18.43278929591177,
                "originalProfit": -258.133422851563,
                "originalBudget": 73.3746139402313,
                "scaledSOM": 7.186671816535011,
                "scaledProfit": 30.492959018789705,
                "scaledBudget": 0,
                "finalScore": 18.839815417662358
            },
            {
                "companyId": 4,
                "originalSOM": -21.952146664261793,
                "originalProfit": -2120.63427734375,
                "originalBudget": 84.16210143546748,
                "scaledSOM": 0,
                "scaledProfit": 0,
                "scaledBudget": 0,
                "finalScore": 0
            }
        ]
    },
    {
        "period": 4,
        "seminarId": 10052,
        "scores": [
            {
                "companyId": 1,
                "originalSOM": 10.567273199558299,
                "originalProfit": 5526.03759765625,
                "originalBudget": 41.25051358851006,
                "scaledSOM": 93.25979927039467,
                "scaledProfit": 98.68107703290306,
                "scaledBudget": 0,
                "finalScore": 95.97043815164886
            },
            {
                "companyId": 2,
                "originalSOM": 12.8298655152321,
                "originalProfit": 5648.7998046875,
                "originalBudget": 50.258413175257324,
                "scaledSOM": 100,
                "scaledProfit": 100,
                "scaledBudget": 0,
                "finalScore": 100
            },
            {
                "companyId": 3,
                "originalSOM": -2.6583865284919987,
                "originalProfit": -302.507629394531,
                "originalBudget": 66.3605331793064,
                "scaledSOM": 53.86092005959456,
                "scaledProfit": 36.06081017208001,
                "scaledBudget": 0,
                "finalScore": 44.96086511583729
            },
            {
                "companyId": 4,
                "originalSOM": -20.738753676414472,
                "originalProfit": -3658.9619140625,
                "originalBudget": 71.24548190977531,
                "scaledSOM": 2.842170943040401e-14,
                "scaledProfit": 0,
                "scaledBudget": 0,
                "finalScore": 1.4210854715202004e-14
            }
        ]
    }
];


var originalTimeout;




describe("Student API Submit Decisions : ", function() {


    beforeEach(function(done) {

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

        var student = studentList[0];
        request.post(studentApiPath + "login", { json: student }, function(err, response, body) {

            if (/^[A-Za-z0-9]+$/.test(body.userId) || response.statusCode === 200) {

                request.get(studentApiPath + "choose_seminar?seminar_id=10051", { qs: {seminar_id:semanerId} }, function(err, response, body) {
                    if (!err && response.statusCode == 200) {
                        done();
                    }

                });

            }
        });
    });



    it("Submit One Periods For Company, Brand and SKU Decisions", function(done) {

        var deferred = Q.defer();

        var resultPromise = [];

        function companyAsync(company) {
            request.put(studentApiPath + "company/decision", { json: company }, function(err, response, body) {
                if (!err && response.statusCode == 200) {
                    deferred.resolve(response);
                }else{
                    console.log(body);
                    deferred.reject(new Error(err));
                }
            });

            return deferred.promise;
        }

        function brandAsync(brand) {
            request.put(studentApiPath + "brand/decision", { json: brand }, function(err, response, body) {
                if (!err && response.statusCode == 200) {
                    deferred.resolve(response);
                }else{
                    console.log(body);
                    deferred.reject(new Error(err));
                }
            });

            return deferred.promise;
        }

        function skuAsync(sku) {
            request.put(studentApiPath + "sku/decision", { json: sku }, function(err, response, body) {
                if (!err && response.statusCode == 200) {
                    deferred.resolve(response);
                }else{
                    console.log(body);
                    deferred.reject(new Error(err));
                }
            });

            return deferred.promise;
        }



        period1.forEach(function(company){

            var companyModify = {
                companyId : company.d_CID,
                company_data : {
                    //"d_InvestmentInServicing": company.d_InvestmentInServicing,
                    "d_InvestmentInTechnology": company.d_InvestmentInTechnology,
                    "d_InvestmentInEfficiency": company.d_InvestmentInEfficiency,
                    "d_RequestedAdditionalBudget": company.d_RequestedAdditionalBudget,
                    "d_IsAdditionalBudgetAccepted": company.d_IsAdditionalBudgetAccepted
                }
            };
            resultPromise.push(companyAsync(companyModify));


            company.brandDecisions.forEach(function(brand){

                var brandModify = {
                    companyId : brand.d_CID,
                    brand_id : brand.d_BrandID,
                    brand_data : {
                        d_SalesForce : brand.d_SalesForce
                    }
                };
                resultPromise.push(brandAsync(brandModify));


                brand.SKUDecisions.forEach(function(sku){

                    var skuModify = {
                        companyId : sku.d_CID,
                        brand_id : sku.d_BrandID,
                        sku_id : sku.d_SKUID,
                        sku_data  : {
                            "d_WholesalesBonusRate"      : sku.d_WholesalesBonusRate,
                            "d_WholesalesBonusMinVolume" : sku.d_WholesalesBonusMinVolume,
                            "d_TradeExpenses"            : sku.d_TradeExpenses,
                            "d_ToDrop"                   : sku.d_ToDrop,
                            "d_Technology"               : sku.d_Technology,
                            "d_TargetConsumerSegment"    : sku.d_TargetConsumerSegment,
                            "d_PromotionalEpisodes"      : sku.d_PromotionalEpisodes,
                            "d_PromotionalBudget"        : sku.d_PromotionalBudget,
                            "d_ProductionVolume"         : sku.d_ProductionVolume,
                            //"d_PackSize"                 : sku.d_PackSize,
                            "d_IngredientsQuality"       : sku.d_IngredientsQuality,
                            "d_RepriceFactoryStocks"     : sku.d_RepriceFactoryStocks,
                            //"d_ConsumerPrice"            : sku.d_ConsumerPrice,
                            "d_FactoryPrice"             : sku.d_FactoryPrice,
                            "d_AdditionalTradeMargin"    : sku.d_AdditionalTradeMargin,
                            "d_Advertising"              : sku.d_Advertising
                        },
                        sku_data : {}

                    };
                    //for (var property in skuModify.sku_post) {
                    //    if ( typeof (skuModify.sku_post[property]) == "function") {
                    //        //obj[p]();
                    //    } else {
                    //
                    //        var temp ;
                    //        //temp[property]= skuModify.sku_post[property]
                    //        // property 为属性名称，obj[p]为对应属性的值
                    //        skuModify.sku_data = temp;
                    //    }
                    //
                    //    resultPromise.push(skuAsync(skuModify));
                    //}

                    //console.log("--------:::", skuModify);
                    resultPromise.push(skuAsync(skuModify));
                })


            });





        });



        Q.all(resultPromise).spread(function(){
            for (var i=0; i<arguments.length; i++){
                expect(arguments[i].statusCode).toBe(200);
            }

        }).done(done);


    });



    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });


});










describe("Admin API ReRun Decisions : ", function() {


    beforeEach(function(done) {

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

        var admin = adminList[0];
        request.post(adminApiPath + "login", { json: admin }, function(err, response, body) {

            if (/^[A-Za-z0-9]+$/.test(body.userId) || response.statusCode === 200) {
                done();

            }
        });
    });



    it("Submit One Periods For Company, Brand and SKU Decisions", function(done) {

        var deferred = Q.defer();

        var resultPromise = [];

        function companyAsync(company) {
            request.put(adminApiPath + "company/decision", { json: company }, function(err, response, body) {
                if (!err && response.statusCode == 200) {
                    deferred.resolve(response);
                }else{
                    console.log(body);
                    deferred.reject(new Error(err));
                }
            });

            return deferred.promise;
        }

        function brandAsync(brand) {
            request.put(adminApiPath + "brand/decision", { json: brand }, function(err, response, body) {
                if (!err && response.statusCode == 200) {
                    deferred.resolve(response);
                }else{
                    console.log(body);
                    deferred.reject(new Error(err));
                }
            });

            return deferred.promise;
        }

        function skuAsync(sku) {
            request.put(adminApiPath + "sku/decision", { json: sku }, function(err, response, body) {
                if (!err && response.statusCode == 200) {
                    deferred.resolve(response);
                }else{
                    console.log(body);
                    deferred.reject(new Error(err));
                }
            });

            return deferred.promise;
        }



        period2.forEach(function(company){

            var companyModify = {
                seminarId : semanerId,
                periodId : company.period,
                companyId : company.d_CID,
                company_data : {
                    //"d_InvestmentInServicing": company.d_InvestmentInServicing,
                    "d_InvestmentInTechnology": company.d_InvestmentInTechnology,
                    "d_InvestmentInEfficiency": company.d_InvestmentInEfficiency,
                    "d_RequestedAdditionalBudget": company.d_RequestedAdditionalBudget,
                    "d_IsAdditionalBudgetAccepted": company.d_IsAdditionalBudgetAccepted
                }
            };
            resultPromise.push(companyAsync(companyModify));


            company.brandDecisions.forEach(function(brand){

                var brandModify = {
                    seminarId : semanerId,
                    periodId : brand.period,
                    companyId : brand.d_CID,
                    brand_id : brand.d_BrandID,
                    brand_data : {
                        d_SalesForce : brand.d_SalesForce
                    }
                };
                resultPromise.push(brandAsync(brandModify));


                brand.SKUDecisions.forEach(function(sku){

                    var skuModify = {
                        seminarId : semanerId,
                        periodId : sku.period,
                        companyId : sku.d_CID,
                        brand_id : sku.d_BrandID,
                        sku_id : sku.d_SKUID,
                        sku_data  : {
                            "d_WholesalesBonusRate"      : sku.d_WholesalesBonusRate,
                            "d_WholesalesBonusMinVolume" : sku.d_WholesalesBonusMinVolume,
                            "d_TradeExpenses"            : sku.d_TradeExpenses,
                            "d_ToDrop"                   : sku.d_ToDrop,
                            "d_Technology"               : sku.d_Technology,
                            "d_TargetConsumerSegment"    : sku.d_TargetConsumerSegment,
                            "d_PromotionalEpisodes"      : sku.d_PromotionalEpisodes,
                            "d_PromotionalBudget"        : sku.d_PromotionalBudget,
                            "d_ProductionVolume"         : sku.d_ProductionVolume,
                            //"d_PackSize"                 : sku.d_PackSize,
                            "d_IngredientsQuality"       : sku.d_IngredientsQuality,
                            "d_RepriceFactoryStocks"     : sku.d_RepriceFactoryStocks,
                            //"d_ConsumerPrice"            : sku.d_ConsumerPrice,
                            "d_FactoryPrice"             : sku.d_FactoryPrice,
                            "d_AdditionalTradeMargin"    : sku.d_AdditionalTradeMargin,
                            "d_Advertising"              : sku.d_Advertising
                        },
                        sku_data : {}

                    };
                    //for (var property in skuModify.sku_post) {
                    //    if ( typeof (skuModify.sku_post[property]) == "function") {
                    //        //obj[p]();
                    //    } else {
                    //
                    //        var temp ;
                    //        //temp[property]= skuModify.sku_post[property]
                    //        // property 为属性名称，obj[p]为对应属性的值
                    //        skuModify.sku_data = temp;
                    //    }
                    //
                    //    resultPromise.push(skuAsync(skuModify));
                    //}

                    //console.log("--------:::", skuModify);
                    resultPromise.push(skuAsync(skuModify));
                })


            });





        });



        Q.all(resultPromise).spread(function(){
            for (var i=0; i<arguments.length; i++){
                expect(arguments[i].statusCode).toBe(200);
            }

        }).done(done);


    });



    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });


});


