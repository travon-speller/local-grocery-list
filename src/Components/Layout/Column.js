import ColumnStyles from './Column.css';

export default ({ children, className, style }) => {
  return (
    <div className={className + ' column'} style={{ ...style, display: 'flex', flexDirection: 'column' }}>
      {children}
    </div>
  );
};
