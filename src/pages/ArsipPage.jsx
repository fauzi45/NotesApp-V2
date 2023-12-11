import React from "react";
import NotesArsip from "../component/NotesArsip";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes } from "../utils/local-data";
import NotesFooter from "../component/NotesFooter";
import NotesAction from "../component/Action/NotesAction";
import NotesSearch from "../component/NotesSearch";

function ArsipPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <ArsipPage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class ArsipPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      archiveNotes: getArchivedNotes(),
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
    const archiveNotes = this.state.archiveNotes.filter((note) => {
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
          <NotesArsip notes={archiveNotes} />
          <NotesFooter />
          <NotesAction />
        </section>
      </div>
    );
  }
}

export default ArsipPageWrapper;
