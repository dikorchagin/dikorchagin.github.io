$(document).ready(function() {
    
    // Заглушка. Бекэнда нет, просто читаем статичный файл без аргументов 
    var urlAjax = "/json/news.json";
    var dataAjax = {};
    
    $.ajax({
        url: urlAjax,
        data: dataAjax,
        dataType: "json",
        success: function(data) {
            data = sortContent(data);
            drawAll(data);
        }
        
    });
    
    
    
    // Приводим сырую выгрузку к удобному формату, разбиваем на массивы для каждого типа
    function sortContent(arr) {
        let news = [];
        let quote = [];
        let note = [];
                
        arr.forEach(function(item, i){
            switch(item["species"]){
                case "news":
                        news.push(item);
                    break;
                case "quote":
                        quote.push(item);
                    break;
                case "note":
                        note.push(item);
                    break;
            }
        })
        
        return {"news":news,"quote":quote,"note":note};
    }
    
    // Отрисовка через ReactJS 
    function drawAll(data) {
        
        class Content extends React.Component {
            render() {
                let list = []; 
                let line;

                if (this.props.data.news.length > 0) {
                    line = <Header name="Новости" />;
                    list.push(line);
                    line =  <div class="page page_left">
                                <Newslist data={data.news} />
                            </div>;
                    list.push(line);
                }
                
                if (this.props.data.quote.length > 0) {
                    line = <Header name="Цитаты" />;
                    list.push(line);
                    line =  <div class="page">
                                <Quotelist data={data.quote} />
                            </div>;
                    list.push(line);
                }
                
                if (this.props.data.note.length > 0) {
                    line = <Header name="Заметки" />;
                    list.push(line);
                    line =  <div class="page">
                                <Notelist data={data.note} />
                            </div>;
                    list.push(line);
                }
                
                return list;
            }
        }
        
        class Header extends React.Component {
            render() {
              return <div class="page">
                        <div class="title">
                            <div class="title__text">{this.props.name}</div>
                        </div>
                    </div>;
            }
        } 
        
        class Newslist extends React.Component {
            render() {
                let list = [];
                this.props.data.forEach((item, i) => {
                        let line;
                        if (item["text"].length < 100) {
                            line = <News title={item["title"]} text={item["text"]} type={"newsblock__title "+item["type"]} />;
                        } else {
                            var text = item["text"].substring(0, 96) + "...";
                            line = <Newssmall title={item["title"]} textSmall={text} text={item["text"]} type={"newsblock-small__title "+item["type"]} />;
                        }
                        list.push(line);
                })
                return list; 
            }
        }
        
        class News extends React.Component {
            render() {
                return <div class="newsblock">
                    <div class={this.props.type}>{this.props.title}</div>
                    <div class="newsblock__text">{this.props.text}</div>
                    </div>;
            }
        }

        class Newssmall extends React.Component {
            render() {
                return <div class="newsblock-small">
                        <div class={this.props.type}>{this.props.title}</div>
                        <div class="newsblock-small__key">+</div>
                        <div class="newsblock-small__key-window">W</div>
                        <div class="newsblock-small__text-small">{this.props.textSmall}</div>
                        <div class="newsblock-small__text-full">{this.props.text}</div>
                    </div>
            }
        }
        
        class Quotelist extends React.Component {
            render() {
                let list = [];
                this.props.data.forEach((item, i) => {
                        let line;
                        line = <Quote type={"quote " + item["type"]} text={item["text"]} author={item["author"]} />;
                        list.push(line);
                })
                return list; 
            }
        }
        
        class Quote extends React.Component {
            render() {
                return <div class={this.props.type}>
                            <div class="quote__text">{this.props.text}</div>
                            <div class="quote__author">{this.props.author}</div>
                    </div> ; 
            }
        }
        
        class Notelist extends React.Component {
            render() {
                let list = [];
                this.props.data.forEach((item, i) => {
                        let line;
                        line = <Note type={"dropcaps " + item["type"]} text={item["text"]} />;
                        list.push(line);
                })
                return list; 
            }
        }
        
        class Note extends React.Component {
            render() {
                return <div class={this.props.type}>
                            <div class="dropcaps__text">{this.props.text}</div>
                    </div> ; 
            }
        }
        
        ReactDOM.render( 
                <Content data={data} />,
                document.getElementById("mainBlock")
            );
    }

    
});