import { NemoColor } from '~/lib/style/color'
import { NemoFont, Radius } from './dimens'

export const NemoTheme = {
    Button: {
        Height: '50px',
        BackgroundColor: NemoColor.Slategray50,
        BorderRaidus: Radius.Radius6,
        BorderWidth: '0px',
        BorderColor: NemoColor.Slategray50,
    },

    NormalButton: {
        Height: '50px',
        BackgroundColor: NemoColor.Slategray10,
        BorderRaidus: Radius.Radius6,
        Text: {
            FontColor: NemoColor.Slategray100,
            FontSize: NemoFont.Font15,
        },
    },

    PrimaryButton: {
        Height: '50px',
        BackgroundColor: NemoColor.Redpink50,
        BorderRaidus: Radius.Radius6,
        Text: {
            FontColor: NemoColor.White,
            FontSize: NemoFont.Font15,
        },
    },

    SecondaryButton: {
        Height: '40px',
        BackgroundColor: NemoColor.Redpink10,
        BorderRaidus: Radius.Radius6,
        Text: {
            FontColor: NemoColor.Redpink50,
            FontSize: NemoFont.Font14,
        },
    },

    NormalImageButton: {
        Height: '50px',
        BackgroundColor: NemoColor.Slategray10,
        BorderRaidus: Radius.Radius6,
        Image: {
            Width: '24px',
            Height: '24px',
            MarginRight: '7px',
        },
        Text: {
            FontColor: NemoColor.Slategray100,
            FontSize: NemoFont.Font15,
        },
    },

    PrimaryImageButton: {
        Height: '50px',
        BackgroundColor: NemoColor.Redpink50,
        BorderRaidus: Radius.Radius6,
        Image: {
            Width: '24px',
            Height: '24px',
            MarginRight: '7px',
        },
        Text: {
            FontColor: NemoColor.White,
            FontSize: NemoFont.Font15,
        },
    },

    SecondaryImageButton: {
        Height: '44px',
        BackgroundColor: NemoColor.Redpink10,
        BorderRaidus: Radius.Radius6,
        Image: {
            Width: '16px',
            Height: '16px',
            MarginRight: '7px',
        },
        Text: {
            FontColor: NemoColor.Redpink50,
            FontSize: NemoFont.Font14,
        },
    },

    CircleImageButton: {
        Width: '90px',
        Height: '90px',
        BorderRaidus: Radius.RadiusCircle,
        BackgroundColor: NemoColor.Slategray10,
        Image: {
            Width: '60px',
            Height: '60px',
        },
    },

    RoundButton: {
        Height: '44px',
        BorderRaidus: Radius.Radius22,
        BackgroundColor: NemoColor.Redpink5,
        Text: {
            FontSize: NemoFont.Font14,
            FontColor: NemoColor.Redpink50,
        },
    },

    RoundImageButton: {
        Height: '36px',
        BackgroundColor: NemoColor.White,
        BorderWidth: '1px',
        BorderColor: NemoColor.Slategray20,
        BorderRaidus: Radius.Radius20,
        Image: {
            Width: '16px',
            Height: '16px',
            MarginRight: '3px',
        },
        Text: {
            FontColor: NemoColor.Slategray100,
            FontSize: NemoFont.Font13,
        },
    },

    LoginButton: {
        Height: '50px',
        BackgroundColor: NemoColor.KakaoTalk,
        BorderRaidus: Radius.Radius6,
        Image: {
            Width: '24px',
            Height: '24px',
            MarginRight: '11px',
        },
        Text: {
            FontColor: NemoColor.Slategray100,
            FontSize: NemoFont.Font15,
        },
    },

    OptionButton: {
        Width: '36px',
        Height: '36px',
        BackgroundColor: NemoColor.White,
        BorderRaidus: Radius.Radius6,
        Text: {
            FontColor: NemoColor.Slategray100,
            FontSize: NemoFont.Font12,
        },
    },

    OptionImageButton: {
        Width: '36px',
        Height: '36px',
        BorderRaidus: Radius.Radius6,
        BackgroundColor: NemoColor.White,
        Image: {
            Width: '24px',
            Height: '24px',
        },
    },


    // ========================> tag
    BaseTag: {
        Height: '20px',
        BorderRaidus: Radius.Radius6,
        BorderWidth: '0px',
        BorderColor: NemoColor.BadgePrime,
        BackgroundColor: NemoColor.BadgePrime,
    },

    NormalTag: {
        Height: '16px',
        BorderRaidus: Radius.Radius6,
        BackgroundColor: NemoColor.BadgePrime,
        Text: {
            FontColor: NemoColor.Clustagent,
            FontSize: NemoFont.Font10,
        },
        Image: {
            Width: '12px',
            Height: '12px',
            MarginRight: '2px',
        },
    },

    NormalTag1: {
        Height: '20px',
        BorderRaidus: Radius.Radius6,
        BackgroundColor: NemoColor.White,
        BorderWidth: '1px',
        BorderColor: NemoColor.Slategray90,
        Text: {
            FontColor: NemoColor.Slategray90,
            FontSize: NemoFont.Font10,
        },
    },

    NormalTag2: {
        Height: '20px',
        BorderRaidus: Radius.Radius6,
        BackgroundColor: NemoColor.Facilityfood,
        Text: {
            FontColor: NemoColor.White,
            FontSize: NemoFont.Font10,
        },
    },

    RealPriceTag: {
        Height: '20px',
        BorderRaidus: Radius.Radius6,
        StartBackgroundColor: NemoColor.Redpink90,
        EndBackgroundColor: NemoColor.Redpink50,
        Text: {
            FontColor: NemoColor.White,
            FontSize: NemoFont.Font10,
        },
        Image: {
            Source: require('~/assets/image/ic_common_checkstar_2_12_white.png'),
            Width: '12px',
            Height: '12px',
            MarginRight: '2px',
        },
    },


    // ====================> image 
    BaseImage: {
        Height: '138px',
        BorderRaidus: Radius.Radius5,
    },

    RoundImage: {
        Width: '110px',
        Height: '138px',
        BorderRaidus: Radius.Radius8,
    },

    CircleImage: {
        Width: '60px',
        Height: '60px',
        BorderRaidus: Radius.RadiusCircle,
    }
}