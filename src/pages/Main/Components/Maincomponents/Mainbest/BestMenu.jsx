import React from 'react';
import './Best.scss';
export default function BestMenu() {
  return (
    <div className="menuBoxBox">
      <div className="menuBox">
        <div className="best">
          <img
            className="bestMenu"
            src="https://images.unsplash.com/photo-1546387903-6d82d96ccca6?ixlib=rb-4.0.3&ixid=MnwxMjA3[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="1"
          />
          <p className="menuuBoxName">{}이름</p>
          <p className="menuBoxPrice">{}원</p>
        </div>
        <div className="best">
          <img
            className="bestMenu"
            src="https://images.unsplash.com/photo-1546387903-6d82d96ccca6?ixlib=rb-4.0.3&ixid=MnwxMjA3[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="2"
          />
          <p>{}name</p>
          <span>{}원</span>
        </div>

        <div className="best">
          <img
            className="bestMenu"
            src="https://images.unsplash.com/photo-1546387903-6d82d96ccca6?ixlib=rb-4.0.3&ixid=MnwxMjA3[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="3"
          />
          <span>{}</span>
          <span>{}원</span>
        </div>
        <div className="best">
          <img
            className="bestMenu"
            src="https://images.unsplash.com/photo-1546387903-6d82d96ccca6?ixlib=rb-4.0.3&ixid=MnwxMjA3[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="4"
          />
          <span>{}</span>
          <span>{}원</span>
        </div>
        <div className="best">
          <img
            className="bestMenu"
            src="https://images.unsplash.com/photo-1546387903-6d82d96ccca6?ixlib=rb-4.0.3&ixid=MnwxMjA3[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="4"
          />
          <span>{}</span>
          <span>{}원</span>
        </div>
      </div>
    </div>
  );
}
