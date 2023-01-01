import RowStyles from './Row.css';

export default ({ children, className, style }) => {
  return (
    <div className={className + ' row'} style={{ ...style, display: 'flex', flexDirection: 'row' }}>
      {children}
    </div>
  );
};
