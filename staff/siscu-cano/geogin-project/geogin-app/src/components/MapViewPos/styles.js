import styled from 'styled-components'

export const MapViewPosWrapper = styled.div`
  .leaflet-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
    z-index: 10;
  }

  .leaflet-popup-tip-container {
    display: none;
  }

  .leaflet-popup-content-wrapper {
    border-radius: 0;
    background: white;
    box-shadow: none;
  }

  .leaflet-popup-content {
    margin: 0;
    width: auto !important;
    padding: 12px 18px;
  }

  .popup-fixed {
    position: fixed;
    bottom: 71px !important;
    left: 0 !important;
    right: 0 !important;
    transform: none !important;
    margin: 0;
    border-radius: 0;
    max-width: 480px;
    margin: 0 auto;
    background: white;
    color: #333;
    box-shadow: 0 3px 14px rgba(0, 0, 0, 0.4);
  }

  // Popup info marker
  .popup-quest {
    display: flex;
    flex-direction: column;
    .popup-quest__header {
      display: flex;
      padding: 0;
    }
    .popup-quest__image {
      > img {
        max-width: 100%;
        align-self: center;
      }
    }
    .popup-quest__body {
        padding: 0;
    }
    .popup-quest__title {
        font-size: 15px;
        font-weight: bold;
    }
    p {
      margin: 0 0 8px 0;
    }
  }
`
