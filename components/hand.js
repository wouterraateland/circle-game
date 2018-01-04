export default () => (
  <div>
    <img src="/static/hand.png" alt="Anonymous hand" />
    <style jsx>{`
      div {
        position: absolute;
        left: 0; top: 3em;
        right: 0; bottom: 0;

        overflow: hidden;
      }

      img {
        display: block;
        margin: auto;
        opacity: 0;
        animation: hand 1.5s cubic-bezier(0, 1, .5, 1) forwards;
      }

      @keyframes hand {
        0% { transform: translate(-150%, 150%); }
        25% { transform: translate(-150%, 150%); opacity: 0; }
        100% { transform: translate(-25%, 0); opacity: 1; }
      }
    `}</style>
  </div>
)
