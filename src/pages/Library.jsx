import Mascot from "../assets/img/Mascot.png"
import { CiSearch } from "react-icons/ci";
import HTST from "../assets/img/HowToStopTime.jpg"

const Library = () => {
  return (
    <div className="library-cont">
      <div className="upper-layer">
        <div className="welcome-message">
          <div className="mascot">
            <img src={Mascot} alt="" />
          </div>
          <div className="message">
            <p className="m1">Welcome!</p>
            <p className="m2">User</p>
          </div>
        </div>
        <div className="search-bar">
          <div className="search-wrapper">
            <CiSearch />
            <input type="text" placeholder="Find books" />
          </div>
        </div>
      </div>
      <div className="bottom-layer">
        <div className="labels">
            <h3>Currently Reading</h3>
          </div>
        <div className="currently-reading">
          <div className="current-books">
            <div className="book-card">
              <div className="book-pic">
                  <img src={HTST} alt="" />
              </div>
              <div className="book-title">
                <p>How to Stop Time</p>
              </div>
            </div>
            <div className="book-card">
              <div className="book-pic">
                  <img src={HTST} alt="" />
              </div>
              <div className="book-title">
                <p>How to Stop Time</p>
              </div>
            </div>
            <div className="book-card">
              <div className="book-pic">
                  <img src={HTST} alt="" />
              </div>
              <div className="book-title">
                <p>How to Stop Time</p>
              </div>
            </div>
          </div>
        </div>
        <div className="labels">
            <h3>All Books</h3>
        </div>
        <div className="all-books">
          <div className="addbook-butt">
            <button id="addbooks">
              +
            </button>
            <p>Add Book</p>
          </div>
          <div className="book-card">
            <div className="book-pic">
                <img src={HTST} alt="" />
            </div>
            <div className="book-title">
              <p>How to Stop Time</p>
            </div>
          </div>
          <div className="book-card">
            <div className="book-pic">
                <img src={HTST} alt="" />
            </div>
            <div className="book-title">
              <p>How to Stop Time</p>
            </div>
          </div>
          <div className="book-card">
            <div className="book-pic">
                <img src={HTST} alt="" />
            </div>
            <div className="book-title">
              <p>How to Stop Time</p>
            </div>
          </div>
          <div className="book-card">
            <div className="book-pic">
                <img src={HTST} alt="" />
            </div>
            <div className="book-title">
              <p>How to Stop Time</p>
            </div>
          </div>
          <div className="book-card">
            <div className="book-pic">
                <img src={HTST} alt="" />
            </div>
            <div className="book-title">
              <p>How to Stop Time</p>
            </div>
          </div>
          <div className="book-card">
            <div className="book-pic">
                <img src={HTST} alt="" />
            </div>
            <div className="book-title">
              <p>How to Stop Time</p>
            </div>
          </div>
          <div className="book-card">
            <div className="book-pic">
                <img src={HTST} alt="" />
            </div>
            <div className="book-title">
              <p>How to Stop Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Library