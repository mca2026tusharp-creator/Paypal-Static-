function AccountToggle() {
  return (
    <div className="account-toggle">
      <button className="toggle-option" type="button">
        Personal
      </button>
      <button className="toggle-option active" type="button">
        Business
      </button>
    </div>
  )
}

export default AccountToggle
