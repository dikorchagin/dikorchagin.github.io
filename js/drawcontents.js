$(document).ready(function() {
        
    $.ajax({
        url: "/json/news.json",
        dataType: 'json',
        success: function(data){
            
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
                            <div class="newsblock-small__text-small">{this.props.textSmall}</div>
                            <div class="newsblock-small__text-full">{this.props.text}</div>
                        </div>
                        }
            }
            
            class Newslist extends React.Component {
                render() {
                    var list = [];
                    data.forEach((item, i) => {  
                            if (item["text"].length < 100) {
                                list.push(<News title={item["title"]} text={item["text"]} type={"newsblock__title "+item["type"]} />);
                            } else {
                                var text = item["text"].substring(0, 96) + "...";
                                list.push(<Newssmall title={item["title"]} textSmall={text} text={item["text"]} type={"newsblock-small__title "+item["type"]} />);              
                            }
                        })
                    return list
                    }
            }
                
            ReactDOM.render(
                <Newslist />,
                document.getElementById("newsReact")   
            )
            
        }
    });

    
});

