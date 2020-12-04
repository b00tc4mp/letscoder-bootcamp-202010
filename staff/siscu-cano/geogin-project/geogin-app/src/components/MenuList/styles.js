import styled from 'styled-components'

export const MenuListWrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;        
    align-content: center;
`

export const MenuListItem = styled.button`
    cursor: pointer;
    font-size: 20px;
    border: none;
    margin: 15px 15px 30px;
    border-top: 3px solid rgba(255, 255, 255, .3);
    color: #fff !important;
    border-radius: 6px;
    padding: 8px 15px 10px;
    background: #92cc7b;
    margin: 0 auto 30px auto;
    border-bottom: 3px solid rgba(40, 117, 29, 0.5);
    text-shadow: 2px 2px #4390437d;
    display: block;
    min-width: 276px;
`
