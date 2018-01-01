export default () => (
  <div>
    <img src="/static/hand.png" alt="Anonymous hand" />
    <style jsx>{`
      div {
        padding: 5%;
      }

      img {
        animation: hand 1.5s cubic-bezier(0, 1, .5, 1) forwards;
      }

      @keyframes hand {
        0% { transform: translate(-150%, 150%); }
        25% { transform: translate(-150%, 150%); }
        100% { transform: translate(-25%, 0); }
      }
    `}</style>
  </div>
)
