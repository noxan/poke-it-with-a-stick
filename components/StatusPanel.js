const StatusPanel = ({ status, publicIpAddress, startAction, stopAction }) => (
  <>
    <p>
      {status.name} (code {status.code})
    </p>
    <p>{publicIpAddress}</p>
    <p>
      <button onClick={startAction}>Start</button>
      <button onClick={stopAction}>Stop</button>
    </p>
  </>
);

export default StatusPanel;
