import React from "react";
import { useSearchParams } from "react-router-dom";
import NotesBody from "../component/NotesBody";
import { getActiveNotes } from "../utils/local-data";
import NotesFooter from "../component/NotesFooter";
import NotesAction from "../component/Action/NotesAction";
import NotesSearch from "../component/NotesSearch";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    return (
      <div>
        <section className="homepage">
          <NotesSearch
            keyword={this.state.keyword}
            keywordChange={this.onKeywordChangeHandler}
          />
          <NotesBody notes={notes} />
          <NotesAction />
          <NotesFooter />
        </section>
      </div>
    );
  }
}

export default HomePageWrapper;
