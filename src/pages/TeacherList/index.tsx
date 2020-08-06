import React from 'react';


import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/teacherItems';
import Input from '../../components/input';

import './styles.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Input name="subject" label="Matéria"/>
                    <Input name="week-day" label="Dia da semana"/>
                    <Input name="time" label="Horário" type="time"/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem
                    imgURL="https://avatars2.githubusercontent.com/u/51389025?s=460&u=cd50b629b6fb131d354e283a7b1ee85b4f32e814&v=4"
                    teacherName="Alan Shishido"
                    teaching="Automação Industrial"
                    about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores dignissimos temporibus rerum! Minima cum dignissimos earum eaque illo excepturi obcaecati pariatur. In illum temporibus vero veritatis libero. Cumque, recusandae."
                    price="R$ 80,00"
                />

                <TeacherItem
                    imgURL="https://avatars0.githubusercontent.com/u/23108122?s=460&u=3ea6fce9e3b7373eade3f03fc62d8a6d5de30b20&v=4"
                    teacherName="Leonardo Goulart"
                    teaching="Programação Front-End"
                    about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores dignissimos temporibus rerum! Minima cum dignissimos earum eaque illo excepturi obcaecati pariatur. In illum temporibus vero veritatis libero. Cumque, recusandae."
                    price="R$ 60,00"
                />
                <TeacherItem
                    imgURL="https://avatars3.githubusercontent.com/u/8538371?s=460&u=103197e6aff9fd31bb0181bd2d0744d885c77258&v=4"
                    teacherName="Bianca Santiago"
                    teaching="PRogramação Back-End"
                    about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores dignissimos temporibus rerum! Minima cum dignissimos earum eaque illo excepturi obcaecati pariatur. In illum temporibus vero veritatis libero. Cumque, recusandae."
                    price="R$ 100,00"
                />
            </main>
        </div>
    );
}
export default TeacherList;