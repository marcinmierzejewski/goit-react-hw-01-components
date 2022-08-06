import styles from './Wrapper.module.css';

export const Wrapper = ({ titleSection, content }) => {
  const { wrapper } = styles;

  return (
    <div className={wrapper}>
      <h3>{titleSection}</h3>
      {content}
    </div>
  );
};
