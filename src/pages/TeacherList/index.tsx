import React, { useState, FormEvent } from 'react';


import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/teacherItems';
import Input from '../../components/input';
import Select from '../../components/Select';
import api from '../../services/api';

import './styles.css'

function TeacherList() {
    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')

    function searchTeachers(e: FormEvent){
        e.preventDefault();

        api.post('acess','');
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação física', label: 'Educação física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Química', label: 'Química' },
                            { value: 'História', label: 'História' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Inglês', label: 'Inglês' },
                            { value: 'Espanhol', label: 'Espanhol' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => { setWeekDay(e.target.value) }}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input name="time" label="Horário" type="time" value={time} onChange={(e) => { setTime(e.target.value) }} />


                    <button type="submit">Buscar</button>
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