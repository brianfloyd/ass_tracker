$(document).ready(function () {




    var menuItems = {
        one: "<button class = 'menu-item'>Delete This Store</button>",
        two: "<button class = 'menu-item'>Add Associate</button>",
        three: "<button class = 'menu-item'>Remove Associate</button>"


    };
    var menuText = (function (e) {
        var keys = (Object.keys(menuItems));
        var iterate = (Object.keys(menuItems).length);
        var ret = {};
        for (var i = 0; i < iterate; i++) {
            var partA = keys[i];
            var a = menuItems[keys[i]];
            var b = a.split('>');
            var c = b[1].split('<');
            var partB = c[0];
            ret[partA] = partB;
        }
        return ret;
    }());
    var iconLib = {

        "plus": '<img class ="plus" src="data:image/png;base64,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">',
        "minus": '<img class ="minus_ass"<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATuSURBVHhe7ZxJiB1FGMdH44IiohIDKkRxQ0c0mdfdMyNEPLiAXlQkqIjiNS6HHEw8JM5JTUAjYWJX9wQTYgKGaA4GjXjyoGgOYtQMZrqqRzE6XpREyYIGzfNfnc/L5CPT6b0q9YM/7x3m1bd09VdLV8+Aw+FwOBwOh8PhsAAv/ur8YGL65l4oR/04udcP5aNerB7W34Mo9UfE/usG+v1z6M8dwYS6zYvUC36k3vOETHyhjuN7/3TyInkMv/kGn+8EInnGi6cXUnNnB0NvJbciUWs8oX7mElRESOY+aOXQ+P6ryYxl4Lbz4/QBP5KfcwmoSujF/+DC7OyFqUeWzUfXL9xyX3MB1ykkc/ewkIPkhnn0ou+vQhDbueAa08maunZww+Ql5JYZZCOnkIdOCagloT5KjOhD5F530dMQOLwOyTsxO4gO6C/oOXK1e3jxzMW4ZT6c5XQXta5zc8nRjZNXoN59wTjbSek55NId/XnkfrtQz9vDOdplYbqztfWeOLhj8gJczQ84B42QUK9RKO2Aq/gm65hBQgxPUzjNAsMPdXS0PTMJdUQvLymsZhgVyTVYlh1kHTJRQn6np2AUXv2g7r3LOmKw9GYEhVcv2T4d44AFOlz/1hiG/TY2BpoS6vomirQePJE+yBm2RkIdH9rww7UUbvWg2H7GGrZKcpzCrRa9t8YbtEsoUX+OvnHgIgq7OtC913AGLdVjFHZFZIOHPMAYslIYTHZR5NWgn55xhqwVVid6nU/hlwdX5HnWkMXCnHAJhV8eFNb3OSM2y4uSVRR+eZDAKc6IzdIPxCj8cmTPOXKcGODUi+RqL1ZL2xTmrhs53+YSytZeSkE5RkR6E2cgjyqtIwXBRVzG+TanhDxKTZQjiNSdrIEcMjqBkH5cQc0UB7XgPq7xPDI9gXeE6QJqpjiBSB/hGs8j0xOI395AzRQn27pnGs8j0xOYnUcsSxCl93CN55H5NXBqPjVTnF6UjHCN55HpCbxxvbyQmimO3mDkGs8joxMo5CFqoiRj/XP1nIg1MoewgtmWbYO1q08433LoS8pAefxIfssYsFr6/AyFXx4kcAtnxGZh/rucwi+PPg3PGbFZwyJZROGXp8xAYqJQu3/XtZ/CrwbUhH2cMRtVaf37H9SEFZwxG4Wpz/0UdnXQgaJ/OYOWaaa206tYF+9kDFomOUbhVo9+A4g3aof0Q/VFm3+8jMKtB9TC3ZxxG4TB41UKsz6yIx4Fn5F0XDPD6+WlFGa9wNjaWcaNlyeSJyi8+tHvnqHYKs4RMyU/otCaoxepHozr16cYh8wRBo5fFr8tr6SwmsUX8lnOKWMk1N+9MLmLwmkHJPF11rmuS8gTgZBPUhgtcvLc9DbWyQ7Li+VLFEH73D326XlI4mbO0c4pezkoeZFc7xDoidkWOud0V6Tnr6F6ijzuJrT5evgU51uWHm1bHzDy4sVTt2Bu1ZnnKFh+ftzaVKUo9CrsSgTQXm8U6tdGVxh14MXTCz2hNjW5fta7Kuh1rzS2tm0Cfc4Et/U4RsE/uKAr0gzaf/n28KfLyax96JdY/DB9HL1yF3rlESYJZyahfkNbW/U2fGf+D0JTZHUynl6C4FfjltuOROxFDzrNKQh5EAnbg88t+PvlwUSyuPKnZzagT4bqUdMPk+u19H8FqfS9DYfD4XA4HI6zmYGB/wD5wawmLPhfmwAAAABJRU5ErkJggg==">',
        "add": '<img class ="add_ass" <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAVbSURBVHhe7ZxNaB5FGMfjN4qIigoqVPELjdQ2+5FEqHhQi3pRkeIXiifBr0MPGg/WnKwpaKWk7uym2tIPMFR7sGjFkwdFexCrNtjs7EaxGi9Kq7SKFu3rf7aPl/Tp+252Z3dn0/nBn+SQnf8zz84+M7s7mz6LxWKxWCwWi8WyAHCjL87wJ2aucwI57EXx7V4g73ej5F71ux+m3pDYd2Vfp3MK/bnFn0hudMPkWS9M3nGFjD2RHMHvnW5yQ/knjvkKP7f4In7cjWYWUXMnBwNvxDcgUWOuSH7kElRESOZeaGRgfN9lZLPAwGXnReldXig/5RKgSxjF/+DE7HCC1CXn9qPqFy65L7kOVykkc9egkP0URvtwwm8vRScmuc7VpmM1dU3/+qlzKax2kM2cQh48rkMNCfVRYkYfoPDMRS1DEPBaJO/o3E4YoL+gpylU83Cj2XNwybw/J2gTtda4teTwhqkLUe8+Y4I1UmoNuWJ75zQKv1lo5O3mAjVZWO5sbXwk9m+fOhNn8z0uwFZIJK9QV5oBZ/F1NrAWCX14jLpTLzC+x9DZdn4SyWF1e0ndqodhEV+O27IDbEBtlJDfqCUYda96UPfeZgMpKbS7OnuM1UUVeo9Q96ol6wgTgA45oXyYbE6IKvzcsRp0qPpHY5j2q3ww0HAC1YSykWyqwRXp3ZyxLjWdQLR9ZGD9d1eQlX5QbD9hjTWp8QRmkuNkpRf1bI031CcTEogS9fvwa/vPJjt9IPAxzlCnzBiBmR4gO01kk4fczxhplSkJxGSyk+z0oN6ecUa6ZcwIxN2Jus8ny/LgjDzDGmmWQZdwB2vCZWRZHhTWdzkT3TIqgWH8IlmWBwmc5kx0y6gECjlJluXI3nPk2DHACQlZ5UbJivzqfSvlhOli/lheWLtu4GLrJZStPWRZjiGRXssZ5JHWOlIQnMQnudh6Ssg/qIly+GFyM2uQQ61OIKReV1AzxUEtuINrPI/ansCbgvQSaqY4vkjv4xrPo7YnEMdeTc0UJ3t0zzSeR21PYLYfsSx+mN7GNZ5H7a+B0xdRM8VxwniIazyP2p7Aa9bJs6iZ4qgHjFzjedTqBAp5kJooyWjnVLUmYk16CHcw27AIH8srfyJeSq4nBMuqO7lju+gjLrYc+pwsy+OF8mvGQLswWgy6F5ZbyLI8SOBmzkS3jEqgkCvJsjxqNzxnolsmJXBQxEvIsjxlJpL5yJQEonb/qmo/WeoBNWEvZ6ZT5iRQY/37H9SE5zkznTIlgYhjOdnpgzYU/csZ6pIhCZytbPcq7ot3MIbaZEYC5ShZ6Ud9AcSb6lHTCVQv1Zds+v58sqoG1MJdnLkONZ9AuZpsqiPb4lHwHUkvNZzA2cF18jyyqRaYrZljrktvemH6RDfhCviQOa60XBE/RN2rHvXtGYptwgXSTskPqGv14YSJA3P1+RQTUHuEieOnpW/Ji6lb9eIJ+RQXVGskkr+dIL6FutMMSOKrbHCmS8ijvpCPUDca5Ni+6W1skAbLjeQL1IPmuXX049ORxE1coMYp+zgofo5CNwiMRNSUynexlpJavwbJoxSxmdDD10PHBd+w1Gzb+ISRFzeavh5rq1reo+SRWnw3tlQpCn0KO4IONDcaRfJzrXcYVeBGM4tckWzM6g/XyQqknqpg1L1c271tHah9JrisxzEL/sZ1WpNm0f5Li4MfLiDbhYf6iMUL0gcxKndiVB5mkjA/ieQXtLXVCeVyY/4PQl1kdTKaWYbOr8IlN4lE7MEI6rILQh5Awnbj52b8/cpsJ4Put2cLAbUzVM2aXhBfpaT+K4jW7zYsFovFYrFYTmb6+v4D1ruSrYc9vRAAAAAASUVORK5CYII=">',
        "gear": '<img class ="gear" <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKLSURBVDhPpVRdb0xRFL2+ox58BEEQH00klY7O/RgNojwIEZ7oi3cJr/yA/gAhRHvPvSPVqL5oQjwgopjGtyitpO10zplJQ9LfMdY6d5tenWGEldzMrH32WWeftfe9TjN09OsNblj2+GQGJ1ZJ+N/hKXPXi8yQH+mn+L0k4b9EtboIG0+33tArJOL4ynzw4rFlblRuh+CAhJ19A7NrPKWPCW0AiGHDdQg8QuLbnNJtniqf9CPzkcsUxfqUp0o5xA/6Sn9G9aNupC/a/QvhhvoUNj+z/1mN0s/Br/lhaZdNAIKo7FsLlLmfy+utbcOTy71I61x+ZqekzKOrp7AUAq+CfKlDQk2BQ8/SX6H18MPiHnhYEGrRPVxdEuTNXlxtt4RqgGCJXgqtBxuCK1wRaq9um4JmIH4Pvr10o+nNsswJGPHiynahCTJheSOSB2k+nvc//WBlNpby0I91F3IfCMWB5igO+4JK3+HgkLahe5VDFGQXJc+C10QFt4XWQJ/TY0V0Xv2+EqKfoLU6EVT6ie1sSpSe8ZpCa6AFrF4o9s+1sPuIF0VwrgWlX4Z/d1D+TLavkrGZyZC/QJVHLAcCZc7j8FgoDz2HPROM4fAL3CNLCTiwSOgX6gS9s5voGYTfsDJcN0q/z4x78cx6ofUIotJhJD0UWgMH2Bq+AKh+fL8q7hD6K9rDb2v5OmVvFrdIqCmS19CMpj2twQ3NcVRXYDV+qM/QT/DHtEFS4LfpttdEZX5sDnTemlyHvKlGQ2/BFx2eaSQNsWPZXtMKgTGuJaNhxvl99PvMNvwfgafTQWRO2M2/Q3qQCVZEseTDMN9hp6e6uOFHoRnYWXj7GsJf7Wj8L9hdNoyPhP4Ax/kBIBpzFvOnrY4AAAAASUVORK5CYII=">',
        "closeArrow": '<img class ="close-arrow"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADiSURBVDhP7c4xD8FAFMDxQxgsdp9EfAGDxSJGk9Ug8QFIjCar2ULiExhZfI4uvevdexJzvau7pJXTqrL1nzTte7n+cqzst3F1GwQAPTNmJiSOBWLHjMkIGgnAE1dw9hH7Zv02gqYC4CgUXgPErlk/I2yoMc/zmlLKVhaqMQ64D8Owzvm9rdHETTnAmitcmZGloTGsoWd612g++EpNogM6WlYI3RK6MCsn6sLodjv6bx4diJeF5sJsKeglN2ZzoRqip2q+P8dsLlT3FWZ7RQththi6LIzZIlThJlA4M6uyv8bYA42SOFi0tg6OAAAAAElFTkSuQmCC">'
    };
    var deptOptions = ["Dept", "24", "25", "28", "42"];
    var lrs;
    var lastcss;
    var output = $('.output');
    var cards = $('.cards');
    var $id = '22f611aa-b012-44db-bf38-3e5d7a97d574';
    var prodmail = userDetails();
    var mail = "brian@brianfloyd.me";
    var removeFlag = false; //toggles whether associates are selectable in body event listener
    var gearName; //Universal scoped variable to use body event handler




    //credentials for xapi_environment Watershed Essentials brian@bfloyd.me
    var username = "0c946a10b516aa";
    var password = "295e8897f95433";
    var endpoint = "https://watershedlrs.com/api/organizations/3704/lrs/";

    //create lrs objeces
    try {
        lrs = new TinCan.LRS({

            endpoint: endpoint,
            username: username,
            password: password,
            allowFail: false
        });
    } catch (ex) {
        console.log("Failed to setup LRS object: " + ex);
        // TODO: do something with error, can't communicate with LRS
    }

    //pull last xAPI statement object for actor and create cards accordingly 
    drawCards();


    function drawCards(store, fn, data) {

        var thisguy = new TinCan.Agent({
            mbox: "mailto:" + mail
        });
        lrs.queryStatements({
            params: {
                agent: thisguy,
                activity: "http://ipk.behr.com/web/associates",
                since: "2018-01-05T08:34:16Z"
            },
            callback: function (err, sr) {
                if (err !== null) {
                    console.log("Failed to query statements: " + err);
                    // TODO: do something with error, didn't get statements
                    return;
                }

                if (sr.more !== null) {
                    // TODO: additional page(s) of statements should be fetched
                }

                var st = sr.statements[0];
                var uriExt = "http://ipk.behr.com/associates";

                var ext = st.context.extensions[uriExt];
                var prepStmt = new TinCan.Statement({
                    "actor": {
                        "name": st.actor.name,
                        "mbox": st.actor.mbox
                    },
                    "verb": {
                        "id": "http://activitystrea.ms/schema/1.0/update",
                        "display": {
                            "en-US": "updated"
                        }
                    },
                    "object": {
                        "objectType": "Activity",
                        "id": "http://ipk.behr.com/web/associates",
                        "definition": {
                            "name": {
                                "en-US": "Associate Registration"
                            }
                        }
                    },
                    "context": {
                        "contextActivities": {
                            "parent": [{
                                "id": "http://ipk.behr.com/web",
                                "definition": {
                                    "name": {
                                        "en-US": "iPK Web Environment"
                                    }
                                }
                            }]
                        },
                        "platform": navigator.platform,
                        "extensions": {
                            "http://ipk.behr.com/associates": ext
                        },
                        "language": "en-US"
                    }
                });




                if (typeof st != 'undefined') {

                    if (typeof store != 'undefined') {
                        cards.empty();
                    }
                    if (fn === 'addStore') {


                        //prepStmt.context.extensions[uriExt][store]={};

                        prepStmt.context.extensions[uriExt][store] = {}
                        updateStatement(prepStmt);


                    }

                    if (fn === 'deleteStore') {
                        a

                        delete prepStmt.context.extensions[uriExt][store];
                        updateStatement(prepStmt);

                    }
                    if (fn === "addAssociate") {


                        var i = function () {
                            var ret = st.context.extensions[uriExt][store];

                            return Object.keys(ret).length + 1
                        }

                        var assoc = "associate_" + i();


                        prepStmt.context.extensions[uriExt][store][assoc] = data;
                        updateStatement(prepStmt);
                    }

                    if (fn === 'deleteAssociate') {

                        var values = Object.values(st.context.extensions[uriExt][store]);
                        var iterate = Object.keys(st.context.extensions[uriExt][store]).length;

                        for (var m = 0; m < iterate; m++) {


                            if (values[m].name === data) {

                                m++;

                                delete st.context.extensions[uriExt][store]['associate_' + m]

                                values = Object.values(st.context.extensions[uriExt][store]);
                                iterate = Object.keys(st.context.extensions[uriExt][store]).length;
                                var update = {}
                                for (m = 0; m < iterate; m++) {

                                    values[m];
                                    updateAss = 'associate_' + (m + 1);


                                    update[updateAss] = values[m];





                                }
                                prepStmt.context.extensions[uriExt][store] = update;

                                updateStatement(prepStmt);
                            }





                        }


                    }









                }


                var storeNumbers = (Object.keys(st.context.extensions[uriExt]));
                var cardsToDraw = Object.keys(storeNumbers).length;

                //create cards with store number header based on json 
                for (i = 0; i < cardsToDraw; i++) {
                    $('<div class="card ' + 'card_' + storeNumbers[i] + '"' + '>').appendTo(cards);
                    $('<div class="store">' + storeNumbers[i] + '</div>').appendTo($('.card_' + storeNumbers[i]));
                    $(iconLib.gear).appendTo($('.card_' + storeNumbers[i]));
                }
                //create the associates that belong to store number header
                for (a = 0; a < storeNumbers.length; a++) {
                    var numAssoc = (Object.keys(ext[storeNumbers[a]]).length);
                    for (var z = 1; z < numAssoc + 1; z++) {


                        $('<button class="associate">' + ext[storeNumbers[a]]['associate_' + z].name + '</div>')
                            .appendTo($('.card_' + storeNumbers[a]));
                    }
                }
                drawNewStoreCard(storeNumbers);

            }
        })
    }

    function drawNewStoreCard(str) {


        $('<div class="card new_store">').appendTo(cards);
        $('<input class="add" placeholder="Add a New Store">').appendTo($('.new_store'));
        $('.add').attr('disabled', 'disabled');
        $(iconLib.plus).appendTo('.new_store');
        $('img.plus').on("click", function () {
            $(this).hide();
            $('.add').removeAttr('disabled').focus().removeAttr('placeholder').on('keyup', function (e) {
                if (e.which === 13) {

                    var store = ($('.add').val());
                    var match = false;

                    for (var val of store) {
                        if (isNaN(store) || store.length > 4 || store.length < 3 || store === val) {
                            $('.add').val('').focus('');
                            match = true;
                        }
                    }
                    if (!match) {

                        $('.card.new_store').removeClass('new_store').addClass('card_' + store);

                        drawCards(store, 'addStore');

                    }
                }

            });
        });
    }

    //event listener for menu gear
    $('body').on('click', 'img.gear', function () {

        var selector = '.' + ($(this)[0].parentNode.classList[1]);
        if ($('.menu').length > 0) {
            var elClass = $('.menu')[0].parentElement.classList[1];
            closeMenu($(elClass + ' .menu'));
        }
        $('.msg').remove();
        removeFlag = false;
        gearName = selector;
        $('<div class ="menu">').appendTo(selector).animate({
            height: "50%"
        }, {
            queue: false,
            duration: 750
        });
        var el = selector + ' .menu';
        $(iconLib.closeArrow).appendTo(el);
        $('img.close-arrow').click(function () {
            closeMenu(el);
        });



        var keys = (Object.keys(menuItems));
        var iterate = (Object.keys(menuItems).length);

        for (var val of keys) {
            $(menuItems[val]).appendTo(el);
        }

    });
    //event listener for any menu item
    $('body').on("click", "button", function () {
        //lastcss is a global that is assingned from the previous click if it exists remove the highlight
        if (typeof lastcss != 'undefined') {
            lastcss.removeAttr('style');
        }
        var el = $(this);
        lastcss = el;
        var className = (el[0].classList[0]);
        var parentName = '.' + el[0].parentElement.classList[1];
        //turn menu items grey tuen associates red
        if (className === 'associate' && removeFlag) {
            if (parentName === gearName) {
                deleteAssociate(el);
            }
        }
        if (className === 'menu-item') {
            el.css({
                "color": "#efefef"
            });
            var card = $('.' + (el[0].parentElement.parentElement.classList[1]));
            var a = (el[0].parentElement.parentElement.classList[1]);
            var b = a.split('_');
            var c = '.' + a + ' .menu';
        }

        var menuSelection = (el.text());

        switch (menuSelection) {

            case menuText.one:

                deleteStore(card, b[1]);

                break;

            case menuText.two:

                closeMenu();
                $('<input class ="new-associate grey" placeholder ="associate name">').appendTo(card).focus();
                addAssociate(card);
                break;


            case menuText.three:

                closeMenu();

                var msg = "Choose associate to remove";
                removeFlag = true;
                setTimeout(function () {
                    $('<div class ="msg">' + msg + '</div>').appendTo(card);
                }, 750);
        }
    });


    window.query = function query() {

        lrs.queryStatements({
            params: {

                since: "2016-01-05T08:34:16Z"
            },

            callback: function (err, sr) {
                if (err !== null) {
                    console.log("Failed to query statements: " + err);
                    // TODO: do something with error, didn't get statements
                    return;
                }

                if (sr.more !== null) {
                    // TODO: additional page(s) of statements should be fetched
                }



                console.log(sr.statements);

                $('.input-text').on('keyup', function (e) {

                    if (e.which === 13) {
                        var addon = $(this).val();
                        console.log(addon);
                        var starter = st[addon];

                        console.log(starter);
                        console.log(Object.keys(st));
                    }


                });


            }
        });
    };

    function userDetails() {
        var user = window.location.search;
        var name = user.split('=');
        var name1 = name.slice(',');
        var name2 = name1[1].split('@');
        //var name1 = name.split(",");
        output.text('User: ' + name2[0]);
        return name1[1];
    }

    function deleteStore(card, storeNumber) {

        var con = confirm("Are you sure you want to remove this store and all it's associates?");
        if (con) {
            drawCards(storeNumber, 'deleteStore');
            console.log('Delete ' + storeNumber);
        }
    }

    function addAssociate(card) {

        var a = (card[0].classList[1]);

        var b = a.split('_');
        var store = b[1];

        var input = $('input.new-associate');

        input.on('keyup', function (e) {

            if (e.which === 13) {






                var newAss = $(this).val();
                var a = newAss.split(' ');


                if (newAss.length > 20) {
                    $(this).val('');
                    $(this).attr('placeholder', 'Please enter a name less than 20 chars');

                }

                if (!/^[a-zA-Z]+$/.test(newAss)) {
                    $(this).val('');
                    $(this).attr('placeholder', 'Only alpha chars accepted, try again');

                }

                if (a != 2) {
                    $(this).val('');
                    $(this).attr('placeholder', 'You aint Prince, first and last name please');



                } else {


                    $('<select class ="add-associate-dept grey" >').appendTo(card)
                    $.each(deptOptions, function (key, value) {

                        $("select")
                            .append(
                                $("<option></optiom>")
                                .attr("value", key)
                                .text(value)
                            );
                    });

                    $('select').on('change', function () {
                        var newAssDept = $('select option:selected').text();


                        var data = {
                            "name": newAss,
                            "dept": newAssDept
                        }

                        $('select').remove()
                        drawCards(store, "addAssociate", data)

                    })


                }
            }
        });
    }

    function deleteAssociate(el) {
        el.css({
            "background": "red",
            "color": "white"
        });
        var data = el.text();
        var a = el[0].parentElement.classList[1];
        var b = a.split('_');
        var store = b[1];
        var con = confirm('Please confirm that you would like to remove ' + data + ' from the list');

        if (con) {

            drawCards(store, 'deleteAssociate', data)

            removeFlag = false;


        } else {
            el.css({
                "background": "white",
                "color": "black"
            });
            $('.msg').remove();
            removeFlag = false;

        }
    }



    function closeMenu() {


        $('.menu').animate({
            height: "0%"
        }, {
            queue: false,
            duration: 750
        });
    }

    function updateStatement(statement) {
        lrs.saveStatement(
            statement, {
                callback: function (err, xhr) {
                    if (err !== null) {
                        if (xhr !== null) {
                            console.log("Failed to save statement: " + xhr.responseText + " (" + xhr.status + ")");
                            // TODO: do something with error, didn't save statement
                            return;
                        }

                        console.log("Failed to save statement: " + err);
                        // TODO: do something with error, didn't save statement
                        return;
                    }

                    console.log("Statement saved");

                    // TOOO: do something with success (possibly ignore)
                }
            }
        );
    }




});