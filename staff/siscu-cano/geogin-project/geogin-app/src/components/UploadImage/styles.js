import styled from 'styled-components'

export const UploadImageWrapper = styled.div`
    display: block;
    max-width: 100%;
    width: 80%;
    margin: 0 auto;
    .preview {
        width: 100%;
        margin-top: 30px;
        border: 1px solid #ccc;
        max-width: 100%;
        box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.05);
        background-color: #fff;
        border-radius: 10px;
        img {
            max-width: 100%;
            display: inline-block;
            margin: 0 auto; 
            opacity: 0.7;
            max-height: 180px;
        }
    }
    .fileContainer {
        border: 1px solid #ccc;
    }
`
