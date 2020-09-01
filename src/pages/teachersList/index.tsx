import React from 'react';

import './styles.css';
import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/teacherItem';
import Input from '../../components/input';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Input name="subject" label="Matéria" />
          <Input name="week_day" label="Dia da semana" />
          <Input name="time" label="Hora" />
        </form>
      </PageHeader>
      <TeacherItem />
    </div>
  );
}

export default TeacherList;
