describe("A suite", function() {
    $("body").append("<jqx-test color='red' text='123'>123</jqx-test>");

    it('Should exist', function() {
        mduri = document.body.getElementsByTagName("jqx-test");
        console.log($(mduri).text());
        expect($(mduri).text()).toBe('123');
    });

  /*  it('Should exist', function() {
        expect(true).toBe(true);
    });*/
});