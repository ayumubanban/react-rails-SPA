class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken

        # * respond_toを使うのに必要
        include ActionController::MimeResponds
end
