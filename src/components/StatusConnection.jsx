export default function StatusConnection({ isAnkiConencted }) {
  return (
    <>
      <style>{`
        .pulse {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          position: fixed;
          top: 40px;
          right: 40px;
          display: inline-block;
        }

        .pulse::before,
        .pulse::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(127,185,0,0.2);
          opacity: 0;
          transition:
            background 0.8s ease,
            transform 0.8s ease,
            scale 0.8s ease;
        }

        .pulse.disconnected::before, 
        .pulse.disconnected::after {
            background: rgba(240, 38, 2, 0.38);
            scale: 1.5;
        }

        .pulse::before {
          transform: scale(1);
          animation: pulse 3s infinite linear;
        }

        .pulse::after {
          animation: pulse 3s 2s infinite linear;
        }

        .status {
          width: 12px;
          height: 12px;
          background: rgba(202, 230, 144, 1);
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .status.disconnected {
            background: rgba(202, 99, 73, 1);
        }

        @keyframes pulse {
          0%   { transform: scale(0.6); opacity: 0; }
          33%  { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.4); opacity: 0; }
        }
      `}</style>

      
        <div className={`pulse ${isAnkiConencted ? "connected" : "disconnected"}` }>
          <div className={`status ${isAnkiConencted ? "connected" : "disconnected"}`}></div>
        </div>
      
    </>
  );
}
