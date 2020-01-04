/* eslint-disable */

<Field
    name="email"
    label="Email"
    type="email"
    component={TextInput}
    disabled={pristine || submitting || invalid} // #1
    onKeyUp={(event) => { // #2
        if (event.keyCode === 13 && !invalid && !pristine) {
            handleSubmit(onSaveAccountDetails)();
        }
    }}
/>


{ isCart && deviceType === 'mobile' && // #3
    <React.Fragment>
        <Navbar
            isBack
            headerTitle="Cart"
        />
        <div className="main_wrapper">
            <CartList handleOpenItem={this.handleOpenItem} />
        </div>
    </React.Fragment>
}
// ========================================
function App() {
    return (
        isEmpty ? // #4
            <React.Fragment>
                {this.renderHeader(props.title)}
                {this.renderBody(props.items)}
                {this.renderFooter(props.date)}
            </React.Fragment>
            : // #5
            <React.Fragment>
                <EmptyScreen icon="orders" />
                <Banner isOpen>
                    <Button
                        middle="Log in"
                        kind="outline"
                        gtmtitle="login"
                    />
                </Banner>
            </React.Fragment>
    );
}
// ===================================
