import React, { useEffect } from 'react';
import Block from '../components/Block.jsx';

const Card = () => {
  return (
    <div className="card">
      <div className="card__header">
        <h3><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1569_297)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 10C2.25 9.58579 2.58579 9.25 3 9.25L17 9.25C17.4142 9.25 17.75 9.58579 17.75 10C17.75 10.4142 17.4142 10.75 17 10.75L3 10.75C2.58579 10.75 2.25 10.4142 2.25 10Z" fill="#82B284" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 10C2.25 9.80109 2.32902 9.61032 2.46967 9.46967L8.46967 3.46967C8.76256 3.17677 9.23744 3.17677 9.53033 3.46967C9.82322 3.76256 9.82322 4.23744 9.53033 4.53033L4.06066 10L9.53033 15.4697C9.82322 15.7626 9.82322 16.2374 9.53033 16.5303C9.23744 16.8232 8.76256 16.8232 8.46967 16.5303L2.46967 10.5303C2.32902 10.3897 2.25 10.1989 2.25 10Z" fill="#82B284" />
          </g>
          <defs>
            <clipPath id="clip0_1569_297">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
          К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ</h3>
      </div>
      <div className="card__content">
        <div className="card__title">
          Перспективные захоронения <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3425 2.59069C14.0259 1.90727 15.134 1.90727 15.8174 2.59069L17.5282 4.30147C18.2116 4.98489 18.2116 6.09293 17.5282 6.77635L6.19018 18.1143C6.04953 18.255 5.85876 18.334 5.65985 18.334L2.53485 18.334C2.12064 18.334 1.78485 17.9982 1.78485 17.584L1.78485 14.459C1.78485 14.2601 1.86387 14.0693 2.00452 13.9287L13.3425 2.59069ZM14.7567 3.65135C14.6591 3.55372 14.5008 3.55372 14.4032 3.65135L3.28485 14.7697L3.28485 16.834L5.34919 16.834L16.4675 5.71569C16.5651 5.61806 16.5651 5.45977 16.4675 5.36213L14.7567 3.65135Z" fill="#82B284" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.79322 17.1555L2.96479 14.3271L4.02545 13.2664L6.85388 16.0949L5.79322 17.1555Z" fill="#82B284" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9856 7.96312L12.1572 5.1347L13.2178 4.07404L16.0463 6.90246L14.9856 7.96312Z" fill="#82B284" />
          </svg>
        </div>
        <Block />
      </div>
      {/* end card content */}
    </div>
    // end card
  )
}

export default Card