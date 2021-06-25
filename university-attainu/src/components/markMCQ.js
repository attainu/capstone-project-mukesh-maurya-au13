import React from 'react'

const markMCQ = () => {
  return (
    <div className="createMCQ">
      <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#createMCQ">
        Create MCQ
      </button>
      <div class="modal fade" id="createMCQ" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header ">
              <h2 class="modal-title" id="exampleModalLabel">
                MCQ
                <h6>Please select the correct One. </h6>
              </h2>

              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" className="bg-danger text-white">&times;</span>
              </button>
            </div>
            <form action=" " method="POST">
              <div class="modal-body mx-5">
                <MCQ />
              </div>
              <div class="modal-footer">
                <button type="submit" name="Submit Attendance" class="btn btn-warning leftButton">
                  Create MCQ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default markMCQ
