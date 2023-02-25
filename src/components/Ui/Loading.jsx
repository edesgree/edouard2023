function Loading() {
  return (
    <div aria-label="loading" className="loading has-text-centered">
      <svg viewBox="0 0 50 50" class="spinner">
        <circle class="ring" cx="25" cy="25" r="15" />
        <circle class="line" cx="25" cy="25" r="15" />
      </svg>
    </div>
  );
}
export default Loading;
