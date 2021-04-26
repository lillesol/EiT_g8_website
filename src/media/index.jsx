const media = {
    images: {

        Sidebar: {
            icon1: require('./images/WebsitePictures/sidebar_1.png'),
            icon2: require('./images/WebsitePictures/sidebar_2.png'),
            icon3: require('./images/WebsitePictures/sidebar_3.png'),
            icon4: require('./images/WebsitePictures/sidebar_4.png'),
            icon5: require('./images/WebsitePictures/sidebar_5.png'),
            icon6: require('./images/WebsitePictures/sidebar_6.png'),
            icon7: require('./images/WebsitePictures/sidebar_7.png'),
            icon8: require('./images/WebsitePictures/sidebar_8.png'),
            icon9: require('./images/WebsitePictures/sidebar_9.png'),
            icon10: require('./images/WebsitePictures/sidebar_video.png')
        },

        InfoBoxImages: {
            RecyclingMethodDiagram: require('./images/WebsitePictures/Recycling_method_table.png'),
            BuildingBob: require('./images/WebsitePictures/Byggmester_bob.png'),

            Icons: {
                AquirementBattery: require('./images/WebsitePictures/checkbox_acquirement_of_batteries.png'),
                PeakShaving: require('./images/WebsitePictures/checkbox_peak_shaving.png'),
                Profitability: require('./images/WebsitePictures/checkbox_profitability.png'),
                RecyclingMethod: require('./images/WebsitePictures/checkbox_recycling_methods.png'),
                Wrench: require('./images/WebsitePictures/checkbox_wrench.png'),
                
            }
        },

        ExpandedDiagram: require('./images/WebsitePictures/Big_flow_chart_with_text.png'),

        SystemDiagram: require('./images/EiTdrawing.png'),

        MainBackground: require('./images/mountainBG.png'),

        StaticBackground: require('./images/WebsitePictures/Static-wallpaper.png'),

        WebsitePictures: {
            Mountainbg: require('./images/WebsitePictures/1.jpg'),
            PowerlineOrg: require('./images/WebsitePictures/2.jpg'),
            LightbulbLight: require('./images/WebsitePictures/3.jpeg'),
            car: require('./images/WebsitePictures/4.jpg'),
            battery: require('./images/WebsitePictures/5.jpeg'),
            PowerlineLight: require('./images/WebsitePictures/6.jpg'),
            Wave: require('./images/WebsitePictures/7.jpg'),
            LightbulbDark: require('./images/WebsitePictures/8.jpg'),
            Nightsky: require('./images/WebsitePictures/9.png'),
            city: require('./images/WebsitePictures/10.jpg'),
            logo: require('./images/WebsitePictures/Logo.png'),
            chartSmall: require('./images/WebsitePictures/Chart_small.png'),
            chartBig: require('./images/WebsitePictures/Chart_big.png'),
        },

        Glitre: {
            CommunityHouse: {
                Low : {
                    HeatMMonth: require(`./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapMonth.png`),
                    HeatMWeek: require(`./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapWeek.png`),
                    MLPeakShaving: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/MaxLoadPeakShaving.png'),
                    PowerProfileY: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/PowerProfileYear.png'),
                },
                Mid : {
                    HeatMMonth: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapMonth.png'),
                    HeatMWeek: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapWeek.png'),
                    MLPeakShaving: require('./PowerFigures/Glitre/CommunityHouse/40kW_120kWh/MaxLoadPeakShaving.png'),
                    PowerProfileY: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/PowerProfileYear.png'),
                },
                High : {
                    HeatMMonth: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapMonth.png'),
                    HeatMWeek: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapWeek.png'),
                    MLPeakShaving: require('./PowerFigures/Glitre/CommunityHouse/150kW_450kWh/MaxLoadPeakShaving.png'),
                    PowerProfileY: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/PowerProfileYear.png'),
                },
            },
            Mill: {
                Low: {
                    HeatMMonth: require('./PowerFigures/Glitre/Mill/10kW_30kWh/HeatMapMonth.png'),
                    HeatMWeek: require('./PowerFigures/Glitre/Mill/10kW_30kWh/HeatMapWeek.png'),
                    MLPeakShaving: require('./PowerFigures/Glitre/Mill/10kW_30kWh/MaxLoadPeakShaving.png'),
                    PowerProfileY: require('./PowerFigures/Glitre/Mill/10kW_30kWh/PowerProfileYear.png'),
                },
                Mid: {
                    HeatMMonth: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapMonth.png'),
                    HeatMWeek: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapWeek.png'),
                    MLPeakShaving: require('./PowerFigures/Glitre/Mill/40kW_120kWh/MaxLoadPeakShaving.png'),
                    PowerProfileY: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/PowerProfileYear.png'),
                },
                High: {
                    HeatMMonth: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapMonth.png'),
                    HeatMWeek: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapWeek.png'),
                    MLPeakShaving: require('./PowerFigures/Glitre/Mill/150kW_450kWh/MaxLoadPeakShaving.png'),
                    PowerProfileY: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/PowerProfileYear.png'),
                },
            },
            Office: {
                Low: {
                    HeatMMonth: require('./PowerFigures/Glitre/Office/10kW_30kWh/HeatMapMonth.png'),
                    HeatMWeek: require('./PowerFigures/Glitre/Office/10kW_30kWh/HeatMapWeek.png'),
                    MLPeakShaving: require('./PowerFigures/Glitre/Office/10kW_30kWh/MaxLoadPeakShaving.png'),
                    PowerProfileY: require('./PowerFigures/Glitre/Office/10kW_30kWh/PowerProfileYear.png'),
                },
                Mid: {
                    HeatMMonth: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapMonth.png'),
                    HeatMWeek: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapWeek.png'),
                    MLPeakShaving: require('./PowerFigures/Glitre/Office/40kW_120kWh/MaxLoadPeakShaving.png'),
                    PowerProfileY: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/PowerProfileYear.png'),
                },
                High: {
                    HeatMMonth: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapMonth.png'),
                    HeatMWeek: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/HeatMapWeek.png'),
                    MLPeakShaving: require('./PowerFigures/Glitre/Office/150kW_450kWh/MaxLoadPeakShaving.png'),
                    PowerProfileY: require('./PowerFigures/Glitre/CommunityHouse/10kW_30kWh/PowerProfileYear.png'),
                },
            },

        },
    },
    videos: {
        infoVideo: require('./videos/Video_with_VO.mp4'),
    },
 };

export default media;