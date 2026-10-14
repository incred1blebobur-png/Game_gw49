'use client'

import React from 'react'


const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notfound-glow"></div>

      <div className="notfound-content">
        <div className="notfound-badge">
          <span className="status-dot"></span>
          ERROR 404
        </div>

        <h1 className="notfound-title">
          4<span>0</span>4
        </h1>

        <h2>Oops! Sahifa topilmadi</h2>

        <p>
          Kechirasiz, siz qidirayotgan sahifa mavjud emas
          yoki boshqa manzilga ko'chirilgan.
        </p>

        <div className="notfound-buttons">
          <a href="/" className="home-btn">
            <span>←</span> Bosh sahifaga qaytish
          </a>

          <button
            className="back-btn"
            onClick={() => window.history.back()}
          >
            Orqaga
          </button>
        </div>

        <div className="notfound-footer">
          <span>404</span>
          <span className="footer-line"></span>
          <span>PAGE NOT FOUND</span>
        </div>
      </div>
    </div>
  )
}

export default NotFound