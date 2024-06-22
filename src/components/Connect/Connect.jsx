import connectStyles from "./Connect.module.css";

function Connect() {
  return (
    <section className={connectStyles.connect}>
      <h2>Reach Out</h2>
      <section className={connectStyles.allFields}>
        <div className={connectStyles.field}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className={connectStyles.field}>
          <label htmlFor="motive">Motive</label>
          <input type="text" name="motive" id="motive" required />
        </div>
        <div className={connectStyles.field}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" required />
        </div>
        <div className={connectStyles.field}>
          <label htmlFor="note">Note</label>
          <textarea name="note" id="note"></textarea>
        </div>
        <div>
          <button>Send</button>
        </div>
      </section>
    </section>
  );
}

export { Connect };
