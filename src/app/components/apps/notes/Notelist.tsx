"use client";
import { Icon } from "@iconify/react";
import React, { useEffect, useState, useContext } from "react";
import { IconTrash } from "@tabler/icons-react";
import { NotesType } from "../../../(DashboardLayout)/types/apps/notes";
import { Alert, Button, TextInput, Tooltip } from "flowbite-react";
import { NotesContext } from '@/app/context/NotesContext/index';


const Notelist = () => {

  const { notes, selectNote, selectedNoteId, deleteNote }: any = useContext(NotesContext);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filterNotes = (notes: NotesType[], nSearch: string) => {
    if (nSearch !== "")
      return notes.filter(
        (t: any) =>
          !t.deleted &&
          t.title
            .toLocaleLowerCase()
            .concat(" ")
            .includes(nSearch.toLocaleLowerCase())
      );

    return notes.filter((t) => !t.deleted);
  };

  const filteredNotes = filterNotes(notes, searchTerm);

  return (
    <>
      <div>
        <TextInput
          id="search"
          value={searchTerm}
          placeholder="Search Notes"
          className="form-control"
          sizing="md"
          required
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <h6 className="text-base mt-6">All Notes</h6>
        <div className="flex flex-col gap-3 mt-4">
          {filteredNotes && filteredNotes.length ? (
            filteredNotes.map((note, index) => (
              <div key={note.id}>
                <div
                  className={`cursor-pointer relative p-4 rounded-md bg-light${note.color} dark:bg-dark${note.color}`}
                  onClick={() => selectNote(note.id)}
                >
                  <h6 className={`text-base truncate text-${note.color}`}>
                    {note.title}
                  </h6>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-dark dark:text-white">
                      {new Date(note.datef).toLocaleDateString()}
                    </p>
                    <div>
                      <Tooltip content="Delete">
                        <Button
                          aria-label="delete"
                          className="bg-transparent h-8 w-8 text-dark dark:text-white p-0 flex items-center hover:bg-transparent hover:text-dark dark:hover:text-white"
                          onClick={() => deleteNote(note.id)}
                        >
                          <IconTrash width={18} />
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              <Alert color="error" icon={() => <Icon icon="solar:info-circle-linear" className="me-2" height={20} />}>
                <span className="font-medium"> No Notes Found!</span>
              </Alert>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Notelist;
