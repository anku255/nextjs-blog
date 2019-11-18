import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 0.75rem 8rem;
  margin: 0 auto;

  .header {
    display: flex;
    justify-content: space-between;

    &__left {
      display: flex;
      align-items: center;

      button {
        border: none;
        margin: 0;
        padding: 0;
        margin-right: 0.5rem;
        border: none;
        &:focus {
          outline: none;
        }
        svg {
          height: 1rem;
          width: 1rem;
          color: #667eea;
          fill: currentColor;
        }
      }
      div {
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.25rem;
      }
    }

    &__right {
      display: flex;
      align-items: center;

      .header__select {
        position: relative;
        width: 6rem;
        margin-right: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;

        div {
          pointer-events: none;
          display: flex;
          align-items: center;
          color: grey;
          svg {
            height: 0.5rem;
            width: 0.5rem;
            fill: currentColor;
          }
        }

        select {
          display: block;
          appearance: none;
          border: none;
          border-radius: 3px;
          line-height: 1.25rem;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.875rem;

          &:focus {
            outline: none;
            background: white;
          }
        }
      }

      .button__secondary {
        padding: 0.75rem;
        width: 8rem;
        margin-right: 1rem;
        border-radius: 5px;
        font-weight: 600;
        border: 1px solid #f6ad55;
        cursor: pointer;

        &:focus {
          outline: none;
        }
        &:hover {
          background: #f6ad55;
          color: white;
        }
      }
      .button__primary {
        padding: 0.75rem;
        width: 10rem;
        border-radius: 5px;
        font-weight: 600;
        color: white;
        background: #f6ad55;
        border: none;
        cursor: pointer;

        &:focus {
          outline: none;
        }
        &:hover {
          background: #dd6b20;
          color: white;
        }
      }
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="header">
      <div className="header__left">
        <button>
          <svg viewBox="0 0 20 20">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <div>Clanist.com</div>
      </div>
      <div className="header__right">
        <div className="header__select">
          <div>
            <svg viewBox="0 0 20 20">
              <path d="M10 20S3 10.87 3 7a7 7 0 1114 0c0 3.87-7 13-7 13zm0-11a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </div>

          <select>
            <option>England</option>
            <option>India</option>
          </select>

          <div>
            <svg viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <button className="button__secondary">Sign In</button>
        <button className="button__primary">Rent your room</button>
      </div>
    </div>
  </StyledHeader>
);

export default Header;
