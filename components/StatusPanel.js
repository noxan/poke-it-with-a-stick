const StatusPanel = ({ state, publicIpAddress, startAction, stopAction }) => (
  <>
    <p>
      {state.name} (code {state.code})
    </p>
    <p>{publicIpAddress}</p>
    <p>
      <button onClick={startAction}>Start</button>
      <button onClick={stopAction}>Stop</button>
    </p>
  </>
);

export default StatusPanel;
