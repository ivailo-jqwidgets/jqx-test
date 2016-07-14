describe("A suite", function() {
    $("body").append("<jqx-test color='red' text='123'>123</jqx-test>");

    it('Should exist', function() {
        test = document.body.getElementsByTagName("jqx-test");
        console.log($(test).text());
        expect($(test).text()).toBe('123');
    });
});