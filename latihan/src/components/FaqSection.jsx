/* eslint-disable react/prop-types */
export default function FaqSection({ children }) {
  return (
    <div className="Container">
      <h1>Frequently Asked Questions</h1>
      <div className="Question">{children}</div>
    </div>
  );
}
