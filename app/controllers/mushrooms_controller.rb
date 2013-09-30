class MushroomsController < ApplicationController
  # GET /mushrooms
  # GET /mushrooms.json
  def index
	@mushrooms = Mushroom.search(params[:search])

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @mushrooms }
    end
  end

  # GET /mushrooms/1
  # GET /mushrooms/1.json
  def show
    @mushroom = Mushroom.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @mushroom }
    end
  end

  # GET /mushrooms/new
  # GET /mushrooms/new.json
  def new
    @mushroom = Mushroom.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @mushroom }
    end
  end

  # GET /mushrooms/1/edit
  def edit
    @mushroom = Mushroom.find(params[:id])
  end

  # POST /mushrooms
  # POST /mushrooms.json
  def create
    @mushroom = Mushroom.new(params[:mushroom])

    respond_to do |format|
      if @mushroom.save
        format.html { redirect_to @mushroom, notice: 'Mushroom was successfully created.' }
        format.json { render json: @mushroom, status: :created, location: @mushroom }
      else
        format.html { render action: "new" }
        format.json { render json: @mushroom.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /mushrooms/1
  # PUT /mushrooms/1.json
  def update
    @mushroom = Mushroom.find(params[:id])

    respond_to do |format|
      if @mushroom.update_attributes(params[:mushroom])
        format.html { redirect_to @mushroom, notice: 'Mushroom was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @mushroom.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /mushrooms/1
  # DELETE /mushrooms/1.json
  def destroy
    @mushroom = Mushroom.find(params[:id])
    @mushroom.destroy

    respond_to do |format|
      format.html { redirect_to mushrooms_url }
      format.json { head :no_content }
    end
  end
end
