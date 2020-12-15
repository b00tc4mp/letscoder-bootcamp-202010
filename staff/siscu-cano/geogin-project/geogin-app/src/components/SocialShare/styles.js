import styled from 'styled-components'

export const WrapShareButtons = styled.div`

    & > .SocialMediaShareButton {
      display: inline-block;
      margin: 10px 0;
      margin-right: 10px;
    }

    & > .SocialMediaShareButton > .btn {
        width: 64px;
        height: 32px;
        padding: 0;
        border-radius: 0;
        border: 0;
    }

    & > .SocialMediaShareButton--facebook > .btn,
    & > .SocialMediaShareButton--facebook > .btn:hover,
    & > .SocialMediaShareButton--facebook > .btn:active,
    & > .SocialMediaShareButton--facebook > .btn:focus  {
        background: blue;
    }

    & > .SocialMediaShareButton--twitter > .btn,
    & > .SocialMediaShareButton--twitter > .btn:hover,
    & > .SocialMediaShareButton--twitter > .btn:active,
    & > .SocialMediaShareButton--twitter > .btn:focus  {
        background: red;
    }

    & > .SocialMediaShareButton--email > .btn {
      background:white;
      border: #00ADE8 1px solid;
    }
    & > .SocialMediaShareButton--email > .btn > .glyphicon{
      font-size: 18px;
      line-height: 25px;
      color: #00ADE8;
    }
    & > .SocialMediaShareButton > .btn > img {
        height: 32px;
    }
`
