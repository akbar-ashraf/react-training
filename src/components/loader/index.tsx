export const Loader = ({ isLoading }) => {
  return isLoading ? (
    <div id="loader">
      <span></span>
    </div>
  ) : null;
};
